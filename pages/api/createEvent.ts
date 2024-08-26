import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    const { formData } = req.body;
    try {
      const insertEvent = await prisma.event.create({
        data: {
          name: formData.title,
          description: formData.description,
          shortDescription: formData.shortDescription,
          startTime: formData.startDate
            ? new Date(formData.startDate).toISOString()
            : null,
          endTime: formData.endDate
            ? new Date(formData.endDate).toISOString()
            : null,
          image: formData.image,
          theme: formData.theme,
          userCapacity: formData.usersCapacity,
          eventlocation: formData.eventlocation,
          eventType: formData.eventType,
        },
      });
      res.status(200).json({ id: insertEvent.id });
    } catch (error) {
      res.status(500).json({ message: "Failed to add Event in DB", error });
    }
  } else {
    res.status(405).json({ error: "Incorrect Data, Method not allowed" });
  }
}
