/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all hostnames
        pathname: "**", // Wildcard to allow all paths
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/browse-jobs",
        destination: "/not-found",
      },
    ];
  },
};

export default nextConfig;
