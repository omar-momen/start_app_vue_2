module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Luster" : "/",
  pluginOptions: {
    i18n: {
      locale: undefined,
      fallbackLocale: undefined,
      localeDir: undefined,
      enableInSFC: undefined,
    },
  },
  transpileDependencies: ["vuetify"],
};
