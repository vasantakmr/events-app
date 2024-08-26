"use client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "@/components/events/ImageUpload";
import { useState } from "react";
import DateSelector from "@/components/other/DateSelector";
import TimeslotSelector from "@/components/other/TimeslotSelector";
import { FormData } from "@/lib/types";

export default function CreatePage() {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    startDate: null,
    endDate: null,
    eventlocation: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date: Date | null, name: string) => {
    setFormData({
      ...formData,
      [name]: date,
    });
  };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const formValues: FormData = { ...formData };
  // };

  const handleSubmit = async (formData: FormData, event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/createEvent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(`Event created with ID: ${data.id}`);
      } else {
        console.log("Failed to add Event");
      }
      // TODO: Show a toast and then navigate to sucessfully posted the event page/all events page
    } catch (error) {
      console.error("Error creating event:", error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Create New Event</h1>
      </header>
      <form
        className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-6"
        onSubmit={(event) => handleSubmit(formData, event)}
      >
        <div className="grid gap-4">
          <ImageUpload />
        </div>
        <div className="grid col-span-2 gap-4">
          <div className="grid gap-2">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Event Name
              </label>
              <Input
                id="name"
                name="title"
                className="text-3xl font-semibold py-7"
                placeholder="Enter event name"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="description" className="text-sm font-medium">
                Event Description
              </label>
              <Textarea
                id="description"
                name="description"
                rows={4}
                placeholder="Enter event description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="start-date" className="text-sm font-medium">
                Start Date/Time
              </label>
              <DateSelector name="startDate" onChange={handleDateChange} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="start-time" className="text-sm font-medium">
                Start Time
              </label>
              <TimeslotSelector />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <label htmlFor="end-date" className="text-sm font-medium">
                End Date
              </label>
              <DateSelector name="endDate" onChange={handleDateChange} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="end-time" className="text-sm font-medium">
                End Time
              </label>
              <TimeslotSelector />
            </div>
          </div>
          <div className="grid gap-2">
            <label htmlFor="location" className="text-sm font-medium">
              Location
            </label>
            <Input
              id="location"
              name="eventlocation"
              placeholder="Enter event location"
              value={formData.eventlocation}
              onChange={handleChange}
            />
          </div>
          <div className="flex w-full justify-end mt-8">
            <Button type="submit" className="w-full">
              Create Event
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

function CalendarDaysIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
