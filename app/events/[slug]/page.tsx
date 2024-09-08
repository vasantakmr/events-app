import { Button } from "@/components/ui/button";
import { getEvent } from "@/lib/action";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Suspense } from "react";
import Loading from "./loading";

export default function EventDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <Suspense fallback={<Loading />}>
      <EventDetails params={params} />
    </Suspense>
  );
}

async function EventDetails({ params }: { params: { slug: string } }) {
  console.log(params.slug);

  const event = await getEvent(params.slug);
  console.log(event);

  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 md:p-10">
      <form
        className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 sm:gap-6"
        autoComplete="off"
      >
        <div className="grid gap-4">
          <Image
            src={`${event?.image}`}
            alt="Event Image"
            width={250}
            height={250}
            className="rounded-[16px] w-full object-cover"
            style={{ aspectRatio: "100/100", objectFit: "cover" }}
            // placeholder="blur"
          />
        </div>
        <div className="grid col-span-2 gap-4">
          <div className="grid gap-2">
            <div className="grid gap-2">
              <div id="name" className="text-3xl font-semibold">
                {event?.name}
              </div>
            </div>
            <div className="grid gap-2">
              <div className="py-5">{event?.description}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              {format(event?.startTime || new Date(), "PPPp")}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              {/* <label htmlFor="end-date" className="text-sm font-medium">
                End Date
              </label> */}
            </div>
          </div>
          <div className="grid gap-2">{event?.eventlocation}</div>
          <div className="grid gap-2">
            <Link
              href={`/events/${event?.id}/register`}
              className="w-full"
              key={`${event?.id}-register`}
            >
              <Button className="w-full">Register Event</Button>
            </Link>
          </div>
          <div className="flex w-full  gap-2 ">
            <Link
              href={`/events/${event?.id}/edit`}
              className="w-full"
              key={`${event?.id}-edit`}
            >
              <Button className="w-full">Edit Event</Button>
            </Link>
            <Link
              href={`/events/${event?.id}/manage`}
              className="w-full"
              key={`${event?.id}-manage`}
            >
              <Button className="w-full">Manage Event</Button>
            </Link>
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
