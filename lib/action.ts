import { prisma } from "./prisma";

export async function getEvent(eventId: string) {
  try {
    const event = await prisma.event.findUnique({
      where: { id: eventId },
    });
    return { event: event };
  } catch (error) {
    console.log("Failed to fetch event: ", error);
  }
}
