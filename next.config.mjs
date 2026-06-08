/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
   remotePatterns: [
     {
       protocol: 'https',
       hostname: 'res-console.cloudinary.com',

     },
   ],
 },
};
export default nextConfig;
