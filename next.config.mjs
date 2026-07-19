/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/blog/florida-humidity-drywall-paint-fixture-problems',
        destination: '/blog/florida-humidity-damage-drywall-doors-paint-fixtures',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
