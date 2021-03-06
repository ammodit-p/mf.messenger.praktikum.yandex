const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: {
      app: './src/index.ts',
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chat.bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
        'express-handlebars': './node_modules/handlebars/dist/handlebars.js'
    }
  },
  devServer: {
    contentBase: 'dist',
    compress: true,
    port: 3000,
    // proxy: [
    //     {
    //         context: ['/proxy-api/**'],
    //         target: 'https://proxy-api/api/',
    //         pathRewrite: { '^/api/': '/' },
    //         secure: false,
    //         onProxyReq: proxyReq => {
    //             proxyReq.setHeader('Host', 'my-custom-host');
    //         },
    //     },
    // ],
    https: true,
    open: process.env.WEBPACK_SERVER_BROWSER || true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot|otf|png)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader?name=assets/fonts/[name].[ext]',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: '**/*',
          context: path.resolve(__dirname, 'src', 'assets'),
          to: './assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: 'style-[hash].css',
    }),
  ],
  externals:{
    fs:    "commonjs fs",
    path:  "commonjs path"
}
};