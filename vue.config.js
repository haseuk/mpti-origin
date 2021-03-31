module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://www.ckdmpti.com/',
        ws: true,
        changeOrigin: true,
      },
    },
    port: '8080',
    disableHostCheck: true,
  },
};
