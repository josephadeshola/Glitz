/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/www.glitz.com.ng/:path*',
        destination: 'https://glitz.com.ng/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
