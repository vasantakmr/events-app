/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          // Basic redirect
          {
            source: '/',
            destination: '/events',
            permanent: true,
          }
        ]
      },
    
};

export default nextConfig;
