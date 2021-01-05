module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData:
          '@import "./src/styles/_variables.scss"; @import "./src/styles/fonts.scss";',
      },
    },
  },
};
