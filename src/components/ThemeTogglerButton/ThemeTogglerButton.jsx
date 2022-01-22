import React from "react";

import { ThemeContext } from "../../context/theme-context";

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
