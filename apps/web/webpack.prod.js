import { merge } from "webpack-merge";
import path from "path";
import webpackCommonConfig from "./webpack.common.js";
import TerserPlugin from "terser-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

/**
 * @type {import("webpack").Configuration}
 */
const webpackProdConfig = merge(webpackCommonConfig,
  {
    mode: "production",
    devtool: "nosources-source-map",
    output: {
      module: true,
      clean: true,
      filename: "bundle.[contenthash].js",
      path: path.resolve(import.meta.dirname, "dist"),
    },
    plugins: [
      new CopyPlugin({
        patterns: [
          { from: "./public/manifest.json", to: "manifest.json" },
          { from: "./public/robots.txt", to: "robots.txt" },
          { from: "./public/*.png", to: "[name][ext]" },
        ]
      })
    ]
  }
)

export default webpackProdConfig;
