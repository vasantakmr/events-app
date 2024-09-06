import { unstable_cache } from "next/cache";
import { prisma } from "./prisma";

export async function getEvent(eventId: string) {
  return await unstable_cache(
    async () => {
      try {
        const event = await prisma.event.findUnique({
          where: { id: eventId },
        });
        return event;
      } catch (error) {
        console.log("Failed to fetch event: " + eventId, error);
      }
    },
    [`${eventId}-event`],
    {
      revalidate: 900,
      tags: [`${eventId}-event`],
    }
  )();
}

export async function getEvents() {
  return await unstable_cache(
    async () => {
      try {
        const events = await prisma.event.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
        return events;
      } catch (error) {
        console.error("Error fetching the events:", error);
        return null;
      }
    },
    [`allevents`],
    {
      revalidate: 900,
      tags: [`allevents`],
    }
  )();
}
