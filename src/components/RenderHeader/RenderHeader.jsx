import PropTypes from "prop-types";

import { ThemeContext } from "../../context/theme-context";
import ThemeTogglerButton from "../ThemeTogglerButton/ThemeTogglerButton";

const RenderHeader = ({ toggleTheme, handlerClearAll }) => {
  return (
    <>
      <div>
        <ThemeContext.Provider value={toggleTheme}>
          <ThemeTogglerButton />
        </ThemeContext.Provider>
      </div>

      <div className="div-flex">
        <h2>Список задач</h2>
        <div className="button-div">
          <button className="button-danger" onClick={handlerClearAll}>
            Очистить всё
          </button>
        </div>
      </div>
    </>
  );
};

export default RenderHeader;

RenderHeader.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  handlerClearAll: PropTypes.func.isRequired,
};
