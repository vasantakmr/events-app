import { auth, signIn } from "@/lib/auth";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import { SignOut } from "./signout-button";
import Image from "next/image";
import Link from "next/link";

export async function SignIn() {
  const session = await auth();
  const imageUrl = session?.user?.image || "/events/blur.webp";
  let userName;
  /* // TODO: name can be only first name and the first name can be trimmed*/
  if (session?.user?.name) {
    userName =
      session.user.name.length > 15
        ? session.user.name.substring(0, 13) + "..."
        : session.user.name;
  }

  if (!session?.user) {
    return (
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button type="submit">Sign in</Button>
      </form>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <Image
            alt="Profile Pic"
            src={imageUrl}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{userName}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link href="/my-events">
          <DropdownMenuItem>My Events</DropdownMenuItem>
        </Link>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
