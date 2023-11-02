/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'shutterstock.com',
      },
    ],
  },
};

module.exports = nextConfig;
