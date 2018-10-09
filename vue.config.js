module.exports = {
  devServer: {
    proxy: {
      '/poems': {
        target: 'http://api.apiopen.top/singlePoetry',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/poems': '/',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        data: '@import "@/assets/style/base/index.scss";',
      },
    },
  },
};
