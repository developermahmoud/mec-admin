const ar = require("vuetify/es5/locale/ar").default;

export default {
  rtl: true,
  lang: {
    locales: { ar },
    current: "ar"
  },
  theme: {
    options: {
      customProperties: true
    },
    dark: true,
    themes: {
      light: {
        primary: "#ac812c",
        secondary: "#ffffff",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#f2f5f8"
      },
      dark: {
        primary: "#ac812c",
        secondary: "#192734",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        background: "#15202b"
      }
    }
  }
};
