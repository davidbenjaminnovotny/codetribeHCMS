module.exports = {
  siteName: 'CodeTribe',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'articles/**/*.md',
        typeName: 'Articles',
        remark: {}
      }
    },
  ],
  transformers: {
    remark: {}
  }
}
