/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'images.pexels.com', 'cdn.discordapp.com', 'i.postimg.cc'],
  },
};

export default nextConfig;
