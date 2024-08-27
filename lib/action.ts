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

export const getEvents = async () => {
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
};
