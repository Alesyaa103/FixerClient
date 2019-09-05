module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/styles/_variables.scss"; @import "@/styles/_reset.scss";',
      },
    },
  },
};
