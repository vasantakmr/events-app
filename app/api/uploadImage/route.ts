import { NextRequest, NextResponse } from "next/server";


// const uploadToCloudinary = (
//   fileUri: string, fileName: string): Promise<UploadResponse> => {
//   return new Promise((resolve, reject) => {
//     cloudinary.uploader
//       .upload(fileUri, {
//         invalidate: true,
//         resource_type: "auto",
//         filename_override: fileName,
//         folder: "product-images", // any sub-folder name in your cloud
//         use_filename: true,
//       })
//       .then((result) => {
//         resolve({ success: true, result });
//       })
//       .catch((error) => {
//         reject({ success: false, error });
//       });
//   });
// };

export async function POST(req: NextRequest) {
  // your auth check here if required
  return NextResponse.json({ message: "success!" });
}
