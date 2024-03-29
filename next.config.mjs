/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, { isServer }) {
    if (!isServer) {
      config.module.rules.push({
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      });
    }
    return config;
  },
};

export default nextConfig;
