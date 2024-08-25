import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { v2 as cloudinary } from "cloudinary";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export { cloudinary };

