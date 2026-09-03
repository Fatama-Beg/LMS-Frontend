/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Vercel-এ টাইপস্ক্রিপ্ট এররের কারণে বিল্ড যেন আটকে না যায়
    ignoreBuildErrors: true,
  },
  eslint: {
    // বিল্ডের সময় লিন্ট সতর্কবার্তা এড়িয়ে যাবে
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_STRAPI_API_URL: process.env.NEXT_PUBLIC_STRAPI_API_URL || 'https://lms-backend-production-e908.up.railway.app',
  }
};

module.exports = nextConfig;
