"use client";

import { CalendarDaysIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { format } from "date-fns";

export default function DateSelector({
  name,
  onChange,
}: {
  name: string;
  onChange: (date: Date | null, name: string) => void;
}) {
  const [date, setDate] = useState<Date>();
  const [open, setOpen] = useState(false);

  const handleDateChange = (date: Date) => {
    onChange(date, name);
    setOpen(false); // Close the popover when a date is selected
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal"
        >
          <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          onDayClick={(date) => handleDateChange(date)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
