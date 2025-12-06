/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  experimental: {
    serverActions: true,
  },
  images: {
    qualities: [ 90], // cấu hình chất lượng ảnh
  },
};

export default nextConfig;
