import webpack from 'webpack';
const { DefinePlugin } = webpack;

import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default (env = {}, argv) => {
  const webpackMode = argv.mode;

  const isProd = webpackMode === 'production';

  const plugins = [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
      },
    }),
    new DefinePlugin({
      'process.env': JSON.stringify(webpackMode),
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ];

  const rules = [
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.tsx?$/,
      use: ['babel-loader'],
      exclude: /node_modules/,
    },
    {
      test: /\.s?css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
            },
          },
        },
        {
          loader: 'sass-loader',
          options: {
            api: 'modern',
          },
        },
      ],
    },
    {
      test: /\.(jpeg|jpg|png|docx)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf)$/,
      type: 'asset/resource',
    },
  ];

  const buildDir = path.join(__dirname, 'dist');

  return {
    entry: ['./src/index'],
    mode: webpackMode,
    devtool: !isProd ? 'eval-source-map' : false,
    devServer: {
      static: {
        directory: buildDir,
      },
      port: 3001,
      historyApiFallback: true,
      hot: true,
      liveReload: true,
    },
    output: {
      publicPath: '/',
      path: buildDir,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    target: !isProd ? 'web' : ['web', 'es5'],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss'],
      modules: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './node_modules'),
      ],
      fallback: {
        crypto: false,
      },
    },
    module: {
      rules: rules,
    },
    plugins: plugins,
    optimization: {
      minimizer: [new TerserPlugin({ extractComments: false })],
    },
  };
};
