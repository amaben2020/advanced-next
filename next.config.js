/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,

    // for digitalOcean
    output: "export",
    distDir: "_static",
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
