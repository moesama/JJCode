module.exports = {
  outputDir: 'docs',
  publicPath: '',
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 模板来源
      template: 'public/index.html',
    },
  },
  productionSourceMap: false,
};