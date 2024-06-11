/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '42zkrqfpvlu9uaa6.blob.vercel-storage.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
