/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/",
        destination: "/events",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "cloudinary.com"], // Add your Firebase Storage bucket here
  },
};

export default nextConfig;
