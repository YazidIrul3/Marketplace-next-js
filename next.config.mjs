/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.dummyjson.com",
      },

      {
        hostname: "assets.digination.id",
      },
    ],
  },
};

export default nextConfig;
