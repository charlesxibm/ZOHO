/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res-console.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "4rd8j67qke.ufs.sh",
      },
    ],
  },
};
export default nextConfig;
