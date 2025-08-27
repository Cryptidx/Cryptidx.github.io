// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export", // enables static export
  basePath: isProd ? "/hannahs-website" : "",
  images: {
    unoptimized: true, // needed for static hosting like GH Pages
  },
};

export default nextConfig;
