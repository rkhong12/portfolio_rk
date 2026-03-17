// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  css: {
    loaderOptions: {
      scss: {
        additionalData: ` 
          @import "@/assets/scss/variables.scss"; 
        `,
      },
    },
  },
  // chainWebpack: (config) => {
  //   config.plugin("html").tap((args) => {
  //     args[0].title = "Hongryeokyeong's Portfolio";
  //     return args;
  //   });
  // },
};
