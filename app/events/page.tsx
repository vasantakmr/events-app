import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import { events } from "@/data/events";
import Link from "next/link";
import { absoluteUrl } from "@/lib/utils";

export default async function EventsPage() {
  const getEvents = async () => {
    try {
      const eventsResponse = await fetch(absoluteUrl("/api/getEvents"), {
        method: "GET",
      });

      const data = await eventsResponse.json();
      return data;
    } catch (error) {
      console.error("Error fetching the events:", error);
      return null;
    }
  };

  const eventsNew = await getEvents();

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        {eventsNew.map((event: any) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <Card className="flex shadow transition-all hover:shadow-lg dark:shadow-black border-input ">
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
                  src={`${event.image}`}
                  blurDataURL="https://firebasestorage.googleapis.com/v0/b/gurucodes-67a76.appspot.com/o/background3.jpeg?alt=media&token=e97c7e70-416e-4428-95be-2f3045a1aea8"
                  alt="Event Image"
                  width={250}
                  height={250}
                  className="rounded-lg object-cover"
                  placeholder="blur"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
              </div>
            </Card>
          </Link>
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
