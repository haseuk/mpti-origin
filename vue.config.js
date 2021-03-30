module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://10.0.1.100:8080/',
        ws: true,
        changeOrigin: true,
      },
    },
    port: '8080',
    disableHostCheck: true,
  },
};
