/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      {
        loader: "@next/font/google",
        options: {
          subsets: ["latin"],
          style: ["normal", "bold"],
          weight: ["400", "700"],
        },
      },
    ],
  },
};

module.exports = nextConfig;
