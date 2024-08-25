"use client";

import Image from "next/image";
import { ImagePlus } from "lucide-react";

import React, { useState, useRef, ChangeEvent } from "react";
import eventImage from "../../public/events/background1.jpeg";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | Blob | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const uploadStagedFile = async (stagedFile: File | Blob) => {
    const form = new FormData();
    form.set("file", stagedFile);

    // here /api/upload is the route of my handler
    const res = await fetch("/api/uploadImage", {
      method: "POST",
      body: form,
    });

    const data = await res.json();

    // we will return the uploaded image URL from the API to the client
    console.log(data.imgUrl);
  };

  function uploadImage(event: ChangeEvent<HTMLInputElement>): void {
    setSelectedImage(event.target.files![0]);

    try {
      uploadStagedFile(event.target.files![0]);
    } catch (error) {
      console.log("upload failed");
    }
  }

  return (
    <div>
      <div className="relative">
        <Image
          src={selectedImage ? URL.createObjectURL(selectedImage) : eventImage}
          alt="Uploaded Image"
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
          onChange={uploadImage}
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

export default ImageUpload;
