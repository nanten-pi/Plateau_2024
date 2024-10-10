// next.config.mjs
import CopyWebpackPlugin from 'copy-webpack-plugin';
import { resolve } from 'path';

export default {
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
      cesium: resolve('./node_modules/cesium/Source'),
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
