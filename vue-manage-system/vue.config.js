module.exports = {
  devServer: {
    port: 8087,
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/assets/scss/_variable.scss";`
        // prependData: `@import "~@/assets/scss/variables.scss";`
      }
    }
  }
}
