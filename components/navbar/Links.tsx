"use client";

import { Package2 } from "lucide-react";
import Link from "next/link";
import { NavbarItem } from "./NavbarItem";

export function Links() {
  return (
    <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
      <Link
        href="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base"
      >
        <Package2 className="h-6 w-6" />
        <span className="sr-only">Gurucodes Inc</span>
      </Link>
      <NavbarItem
        href="/"
      >
        Home
      </NavbarItem>
      <NavbarItem
        href="/events"
      >
        Events
      </NavbarItem>
      <NavbarItem
        href="/discover"
      >
        Discover
      </NavbarItem>
      
    </nav>
  );
}
