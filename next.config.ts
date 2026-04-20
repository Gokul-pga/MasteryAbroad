/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "images.pexels.com",
      "static.sliit.lk",
      "www.uvic.ca",
      "c8.alamy.com",
      "globxinternational.com",
      "res.cloudinary.com"
    ],
    unoptimized: true,
  },
}

export default nextConfig