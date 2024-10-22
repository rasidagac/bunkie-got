/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "42zkrqfpvlu9uaa6.blob.vercel-storage.com",
        port: "",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
