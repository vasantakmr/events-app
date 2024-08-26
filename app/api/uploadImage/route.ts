import { NextRequest, NextResponse } from "next/server";
import { env } from "process";

export async function POST(req: NextRequest) {
  const url = `https://api.cloudinary.com/v1_1/${env.CLOUDINARY_CLOUD_NAME}/upload`;
  const formData = await req.formData();
  const file = formData.get("file") as File;
  const fileBuffer = await file.arrayBuffer();
  const mimeType = file.type;
  const encoding = "base64";
  const base64Data = Buffer.from(fileBuffer).toString("base64");
  const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

  const cloudinaryfd = new FormData();
  cloudinaryfd.append("file", fileUri);
  cloudinaryfd.append("upload_preset", "usPreset"); // Replace with your Cloudinary preset

  try {
    const cloudinaryResponse = await fetch(url, {
      method: "POST",
      body: cloudinaryfd,
    });

    const data = await cloudinaryResponse.json();
    // File uploaded successfully
    return NextResponse.json({ imgUrl: data.secure_url }, { status: 200 });
  } catch (error) {
    console.error("Error uploading the file:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
      { status: 500 }
    );
  }
}
