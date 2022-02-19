import React from "react";
import { ThemesColorType, ThemeContextType } from "./types";

export const themesColor: ThemesColorType = {
  light: "",
  dark: "body-dark-theme option-dark-theme",
};

export const ThemeContext: React.Context<ThemeContextType> =
  React.createContext({
    themeColor: themesColor.light,
    toggleTheme: () => {},
  });
