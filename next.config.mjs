/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.rightawayservices.com' }],
        destination: 'https://rightawayservices.com/:path*',
        permanent: true,
      },
      {
        source: '/blog/florida-humidity-drywall-paint-fixture-problems',
        destination: '/blog/florida-humidity-damage-drywall-doors-paint-fixtures',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
