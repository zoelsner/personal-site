/** @type {import('next').NextConfig} */
const nextConfig = {
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
