import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { events } from "@/data/events";

export default function EventsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        {events.map((event) => (
          <Card key={event.id} className="flex shadow transition-all hover:shadow-lg dark:shadow-black border-input ">
            <div className="grid gap-4 p-4">
              <div className="grid gap-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CalendarIcon className="w-5 h-5" />
                  <span>{event.date}</span>
                  <ClockIcon className="w-5 h-5" />
                  <span>{event.time}</span>
                </div>
                <h2 className="text-2xl font-bold">{event.title}</h2>
              </div>
              <p className="text-muted-foreground">{event.description}</p>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="p-5">
              <Image
                src="/youtube.jpg"
                alt={event.location}
                width={250}
                height={250}
                className="rounded-lg object-cover"
                style={{ aspectRatio: "100/100", objectFit: "cover" }}
              />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
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
