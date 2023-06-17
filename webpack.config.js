const path = require('path');
const os = require('os');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx'],
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "stream": require.resolve("stream-browserify"),
      "fs": false,
      "assert": require.resolve("assert/"),
      "wrap-ansi": require.resolve("wrap-ansi"),
      "path": require.resolve("path-browserify"),
      "https-proxy-agent": require.resolve("https-proxy-agent"),
      "string-width": require.resolve("string-width"),
      "strip-ansi": require.resolve("strip-ansi"),
      "https": require.resolve("https-browserify"),
      "child_process": false,
      "readline": false
    },
  },
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
};