module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
              @import "src/assets/styles/_reset.scss";
              @import "src/assets/styles/_variables.scss";
              @import "src/assets/styles/_mixins.scss";
            `,
      },
    },
  },
};
