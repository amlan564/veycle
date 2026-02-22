/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  experimental: {
    serverComponentsHmrCache: false,
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wedjqhufrpanxtovvlij.supabase.co",
      },
    ],
  },
};

export default nextConfig;
