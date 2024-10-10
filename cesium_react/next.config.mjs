/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
// next.config.js
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Cesium の静的アセットをコピー
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/cesium/Build/Cesium',
            to: 'public/cesium',
          },
        ],
      })
    );

    // Cesium の設定を Webpack に追加
    config.resolve.alias = {
      ...config.resolve.alias,
      cesium: path.resolve(__dirname, 'node_modules/cesium/Source'),
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        module: false,
        path: false,
      };
    }

    return config;
  },
};

