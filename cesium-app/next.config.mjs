import CopyWebpackPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  webpack: (config, { isServer }) => {
    // Cesium の静的ファイルをコピーする
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(__dirname, 'node_modules/cesium/Build/Cesium'),
            to: 'public/cesium', // コピー先を指定
          },
        ],
      })
    );

    // Cesium のモジュール解決のエイリアス設定
    config.resolve.alias = {
      ...config.resolve.alias,
      cesium: resolve(__dirname, 'node_modules/cesium/Source'),
    };

    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        zlib: false,
      };
    }

    return config;
  },
};
