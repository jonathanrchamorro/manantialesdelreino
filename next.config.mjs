/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: produces plain HTML in out/ (works on Vercel, Netlify or HostGator)
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
