import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    const body = await req.json();
    const formData = body.formData;
    var imgUrl = await uploadImage(formData.image);

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
          image: imgUrl,
          theme: formData.theme || "default",
          userCapacity: formData.usersCapacity,
          eventlocation: formData.eventlocation,
          eventType: formData.eventType,
        },
      });
      return NextResponse.json({ id: insertEvent.id });
    } catch (error) {
      return NextResponse.json(
        { message: "Failed to add Event in DB", error },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      { error: "Incorrect Data, Method not allowed" },
      { status: 400 }
    );
  }
}

async function uploadImage(imageUri: string) {
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/upload`;

  const cloudinaryfd = new FormData();
  cloudinaryfd.append("file", imageUri);
  cloudinaryfd.append("upload_preset", "usPreset"); // Replace with your Cloudinary preset

  try {
    const cloudinaryResponse = await fetch(url, {
      method: "POST",
      body: cloudinaryfd,
    });

    const data = await cloudinaryResponse.json();
    const imgUrl: string =
      data.secure_url ||
      "https://res.cloudinary.com/dyshrnvl2/image/upload/v1724702157/coxnnhej3co0kgdvqqdk.jpg";
    return imgUrl;
  } catch (error) {
    console.error("Error uploading the file:", error);
    return null;
  }
}
