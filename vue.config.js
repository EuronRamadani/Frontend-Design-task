module.exports = {
  css: {
    loaderOptions: {
      sass: {
        implementation: require("sass"),
        sassOptions: {
          indentedSyntax: false, // optional
        },
      },
    },
  },
};
