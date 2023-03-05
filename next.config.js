/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains:["links.papareact.com",
  "images.unsplash.com"],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'avatars.githubusercontent.com',
    },
  ],
  },
  experimental: {
    appDir: true,
  },
};
