import React from "react";
import PropTypes from "prop-types";

import {
  NAME_KEY_CHECKBOX_TASK,
  NAME_EDIT_TASK,
} from "../../constants/constants";

const RenderTaskButtons = (props) => {
  const { isCheckboxActive, id, handlerRemoveTask, handlerActivateUiElement } =
    props;

  return (
    <div>
      <div className="div-flex buttons-renders">
        <input
          className="checkbox-render"
          type="checkbox"
          checked={isCheckboxActive}
          onChange={() => handlerActivateUiElement(id, NAME_KEY_CHECKBOX_TASK)}
        />

        <button
          className="button-edit"
          onClick={() => handlerActivateUiElement(id, NAME_EDIT_TASK)}
        >
          Изменить
        </button>

        <button className="button-remove" onClick={() => handlerRemoveTask(id)}>
          X
        </button>
      </div>
    </div>
  );
};

export default RenderTaskButtons;

RenderTaskButtons.propTypes = {
  isCheckboxActive: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  handlerRemoveTask: PropTypes.func.isRequired,
  handlerActivateUiElement: PropTypes.func.isRequired,
};
