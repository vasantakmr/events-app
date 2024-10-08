"use client";

import * as React from "react";
import {
  BookCopy,
  BriefcaseBusiness,
  Calculator,
  CalendarSearch,
  Compass,
  CreditCard,
  Settings,
  SquarePlus,
  TicketCheck,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

export function SearchCommandDialog() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <div
        className="relative"
        onClick={(e) => {
          e.preventDefault();
          setOpen(true);
        }}
      >
        <span className="text-sm absolute left-2.5 top-2.5 h-4  text-muted-foreground text-nowrap">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>/
          </kbd>
          to search
        </span>
        <Input
          type="search"
          placeholder=""
          className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
        />
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search for events and more..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <Link href="/events">
              <CommandItem onSelect={() => setOpen(false)}>
                <CalendarSearch className="mr-2 h-4 w-4" />
                <span>Open Events</span>
              </CommandItem>
            </Link>
            <Link href="/discover">
              <CommandItem onSelect={() => setOpen(false)}>
                <Compass className="mr-2 h-4 w-4" />
                <span>Open Discover</span>
              </CommandItem>
            </Link>
            <Link href="/create">
              <CommandItem onSelect={() => setOpen(false)}>
                <SquarePlus className="mr-2 h-4 w-4" />
                <span>Create Event</span>
              </CommandItem>
            </Link>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <Link href="/my-events">
              <CommandItem>
                <TicketCheck className="mr-2 h-4 w-4" />
                <span>My Events</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </Link>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
