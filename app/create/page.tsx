import CreateEventPage from "@/components/pages/createEventPage";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

export default async function ClientPage() {
  const session = await auth();
  if (session?.user) {
    session.user = {
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
    };
  }

  if (!session) {
    redirect(
      "api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2Fevents"
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <CreateEventPage />
    </Suspense>
  );
}
