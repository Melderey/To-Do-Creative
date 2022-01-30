import React from "react";

import { ThemeContext } from "../../context/theme-context";
import ThemeTogglerButton from "../ThemeTogglerButton/ThemeTogglerButton";
import { RenderHeaderType } from "./type";

const RenderHeader = (props: RenderHeaderType): JSX.Element => {
  const { toggleTheme, handlerClearAll } = props;
  return (
    <>
      <div>
        <ThemeContext.Provider value={{ toggleTheme }}>
          <ThemeTogglerButton />
        </ThemeContext.Provider>
      </div>

      <div className="div-aligns">
        <div>
          <h2>Список задач</h2>
        </div>

        <div className="button-div">
          <button className="button-danger button" onClick={handlerClearAll}>
            Очистить всё
          </button>
        </div>
      </div>
    </>
  );
};

export default RenderHeader;
