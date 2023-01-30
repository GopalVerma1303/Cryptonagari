/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    NEXT_PUBLIC_RPC_URL: process.env.NEXT_PUBLIC_RPC_URL,
    NEXT_PUBLIC_PRIVATE_KEY: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    NEXT_PUBLIC_ADDRESS: process.env.NEXT_PUBLIC_ADDRESS
  },
  images: {
    domains: ['t3.ftcdn.net', 'i.pinimg.com', 'w0.peakpx.com', 'c4.wallpaperflare.com'],
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
}
