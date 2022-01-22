import React from "react";
import PropTypes from "prop-types";

import {
  BLACK,
  RED,
  GREEN,
  ORANGE,
  BLUE,
  NAME_KEY_SELECT_TASK,
} from "../../constants/constants";

const SelectStatusTask = (props) => {
  const { handlerMapEventValue, id, statusTaskColor } = props;

  return (
    <select
      value={statusTaskColor}
      onChange={(e) => handlerMapEventValue(e, id, NAME_KEY_SELECT_TASK)}
      className="select-render"
    >
      <option value={BLACK}>Выберите приоритет задачи</option>
      <option value={RED}>Срочно, важно</option>
      <option value={GREEN}>Не срочно, важно</option>
      <option value={ORANGE}>Срочно, не важно</option>
      <option value={BLUE}>Не срочно, не важно</option>
    </select>
  );
};

export default SelectStatusTask;

SelectStatusTask.propTypes = {
  handlerMapEventValue: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  statusTaskColor: PropTypes.string.isRequired,
};
