import { ThemeContext } from "../../context/theme-context";
import React from "react";

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {(toggleTheme) => (
        <button onClick={toggleTheme} className="button-theme-toggler">
          Очень страшная кнопка <br /> изменения темы
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
