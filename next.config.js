/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['cdn.sanity.io'], // Add Sanity's CDN hostname here
  },
};

module.exports = nextConfig;
