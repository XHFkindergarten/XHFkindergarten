module.exports = {
  publicPath: './',
  outputDir: require('path').resolve(__dirname, 'docs'),
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
    } else if (process.env.NODE_ENV === 'development') {
      // 为开发环境修改配置...
      // 通过返回一个配置对象来和原有 webpack config 进行 merge
      return {
        devServer: {
          port: 3413
        }
      }
    }
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(arg => {
        return [{
          ...arg[0],
          title: 'Introduce'
        }]
      })
  }
}
