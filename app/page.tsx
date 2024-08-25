// * using this for testing

import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const event = await prisma.event.findFirst({
    where: {
      email: "test123@gmail.com",
    },
  });
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10">
      <div className="flex flex-col gap-8">Home Page {event?.name}</div>
    </div>
  );
}
