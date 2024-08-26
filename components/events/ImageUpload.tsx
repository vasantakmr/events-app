"use client";

import Image from "next/image";
import { ImagePlus } from "lucide-react";

import React, { useState, useRef, ChangeEvent } from "react";
import eventImage from "../../public/events/background1.jpeg";

export default function ImageUpload({
  name,
  onChange,
}: {
  name: string;
  onChange: (image: string | null, name: string) => void;
}) {
  const [selectedImage, setSelectedImage] = useState<File | Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  async function onImageChange(event: ChangeEvent<HTMLInputElement>) {
    setSelectedImage(event.target.files![0]);
    const file = event.target.files![0];
    const fileBuffer = await file.arrayBuffer();
    const mimeType = file.type;
    const encoding = "base64";
    const base64Data = Buffer.from(fileBuffer).toString("base64");
    const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

    onChange(fileUri, "image");
  }

  return (
    <div>
      <div className="relative">
        <Image
          src={selectedImage ? URL.createObjectURL(selectedImage) : eventImage}
          alt="Event Image"
          width={250}
          height={250}
          className="rounded-[16px] w-full object-cover"
          style={{ aspectRatio: "100/100", objectFit: "cover" }}
          // placeholder="blur"
          onClick={handleImageClick}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={onImageChange}
          style={{ display: "none" }}
        />
        <ImagePlus
          onClick={handleImageClick}
          color="white"
          className="absolute h-10 w-10 bottom-3 right-3 p-2 bg-blue-500 rounded-full hover:bg-blue-600"
        />
      </div>
    </div>
  );
}
