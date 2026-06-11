/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/work/:path*",
        destination: "/projects/:path*",
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xwio06u3kk8ffotz.public.blob.vercel-storage.com",
      },
    ],
  },
}

export default nextConfig
