import React from "react";

import { ThemeContext } from "../../context/theme-context";

function ThemeTogglerButton(): JSX.Element {
  return (
    <ThemeContext.Consumer>
      {({ toggleTheme }) => (
        <button onClick={toggleTheme} className="button-theme-toggler button">
          Изменить тему
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
