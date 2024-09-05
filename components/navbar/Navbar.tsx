import Link from "next/link";
import { CircleUser, Package2, Menu, CirclePlus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "./ModeToggle";
import { Links } from "./Links";
import { SearchCommandDialog } from "./SearchCommandDialog";
import { NavbarItem } from "./NavbarItem";
import { SignIn } from "../auth/signin-button";

export function Navbar() {
  return (
    <header className="sticky top-0  z-20 flex justify-center h-16 items-center bg-background w-full">
      <div
        className="flex w-full items-center mt-2 gap-4 bg-background px-4 "
        style={{ width: "1000px" }}
      >
        <Links />
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Gurucodes Inc</span>
              </Link>
              <NavbarItem href="/">Home</NavbarItem>

              <NavbarItem href="/events">Events</NavbarItem>
              <NavbarItem href="/discover">Discover</NavbarItem>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex gap-4 md:gap-2 lg:gap-4 flex-1 sm:flex-initial">
            <div className="ml-auto ">
              <Link href="/create">
                <Button
                  variant="outline"
                  className="w-full justify-end text-left font-normal"
                >
                  <CirclePlus className="mr-1 h-4 w-4 -translate-x-1" />
                  Create Event
                </Button>
              </Link>
            </div>
            <div className="relative overflow-hidden">
              <SearchCommandDialog />
            </div>
          </form>
          <ModeToggle />

          <SignIn />
        </div>
      </div>
    </header>
  );
}
