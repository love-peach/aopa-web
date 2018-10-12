const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: process.env.BASE_URL,
  devServer: {
    port: 8082,
    open: true, // 配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'https://www.apiopen.top/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/',
        },
      },
    },
  },
  css: {
    // extract: true,
    loaderOptions: {
      sass: {
        data: '@import "@/styles/base/index.scss";',
      },
    },
  },
  chainWebpack: (config) => {
    config.resolve.alias
      // .set('@', path.resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'));
  },
};
