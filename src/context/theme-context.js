import React from "react";

export const themesColor = {
  light: "",
  dark: "body-dark-theme option-dark-theme",
};

export const ThemeContext = React.createContext({
  themeColor: themesColor.light,
  toggleTheme: () => {},
});
