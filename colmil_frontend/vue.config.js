module.exports = {

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = process.env.VUE_APP_TITLE;
                return args;
            })
    },

    pwa: {
        themeColor: '#003f8a'  
    },

    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "en",
            localeDir: "locales",
            enableInSFC: false
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
};
