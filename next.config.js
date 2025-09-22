/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/quelabs/image/upload/**/Portofolio-Projects/**",
      },
    ],
  },
};

module.exports = nextConfig;
