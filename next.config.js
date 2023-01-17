/** @type {import('next').NextConfig} */
module.exports = {
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
