"use client";

import Image from "next/image";
import { Aperture, Image as ImageIcon, ImagePlus } from "lucide-react";

import React, { useState, useRef } from "react";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div className="relative">
        <Image
          src={
            selectedImage ? URL.createObjectURL(selectedImage) : "/events/background1.jpeg"
          }
          alt="Uploaded Image"
          width={250}
          height={250}
          className="rounded-[16px] w-full object-cover"
          style={{ aspectRatio: "100/100", objectFit: "cover" }}
          onClick={handleImageClick}
        />
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => setSelectedImage(e.target.files![0])}
          style={{ display: "none" }}
        />
        <ImagePlus  className="absolute h-10 w-10 bottom-3 right-3 p-2 bg-blue-500 rounded-full hover:bg-blue-600" />
      </div>
    </div>
  );
}

export default ImageUpload;
