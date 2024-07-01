/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.123.187:8000/api/:path*', // Замените на ваш API
      },
    ]
  },
  // reactStrictMode: false,
}

export default nextConfig
