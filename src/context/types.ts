export type ThemesColorType = {
  light?: string;
  dark?: string;
};

export type ThemeContextType = {
  themeColor?: string;
  toggleTheme?: (payload: any) => void;
};
