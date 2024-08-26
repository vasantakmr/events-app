import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const events = await prisma.event.findMany();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch events", error });
    }
  }
}
