import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      // TODO: change it to startTime after its fixed
      const events = await prisma.event.findMany({
        orderBy: { 
          createdAt: 'desc',
        },
      });
      return NextResponse.json(events, { status: 200 });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to fetch events", error },
        { status: 500 }
      );
    }
  }
}
