/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.logo.dev",
        port: "",
        pathname: "/ticker/**",
      },
    ],
  },
};

export default nextConfig;