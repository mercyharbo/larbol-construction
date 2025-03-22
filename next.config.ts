const path = require('path')

module.exports = {
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/videos/',
          publicPath: '/_next/static/videos/',
          name: '[name].[ext]',
        },
      },
    })

    return config
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/**', // Make sure to handle all possible paths.
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        port: '',
        pathname: '/**', // Make sure to handle all possible paths.
      },
    ],
  },
}
