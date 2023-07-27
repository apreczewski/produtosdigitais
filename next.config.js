const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ["images.pexels.com", "images.unsplash.com", "tailwindui.com"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.resolve.alias['@assets'] = path.join(__dirname, './src/assets');
    return config;
  },
};

module.exports = nextConfig;
