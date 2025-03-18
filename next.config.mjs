/** @type {import('next').NextConfig} */
const nextConfig = {
  // npm run dev vs. npm run build (production)
  basePath:
    process.env.NODE_ENV === "production" ? "/kimmykokonut.github.io" : "",
  output: process.env.NODE_ENV === "production" ? "export" : undefined, //enables static exports
  reactStrictMode: true,
};

export default nextConfig;
