/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: () => [
    {
      source: "/",
      destination: "https://twitter.com/jagaapple",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
