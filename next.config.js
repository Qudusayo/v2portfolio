/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
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
