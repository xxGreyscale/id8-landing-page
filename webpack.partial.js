var ImageminPlugin = require('imagemin-webpack-plugin').default;
module.exports = {
    mode: 'development',
    plugins: [
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'production', // Disable during development
            pngquant: {
              quality: '95-100'
            }
          })
    ]
};