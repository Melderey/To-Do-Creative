import React from "react";
import PropTypes from "prop-types";

import "./RenderSelectTasks.css";
import {
  UNCOMPLETED_TASKS,
  COMPLETED_TASKS,
  ALL_TASKS,
} from "../../constants/AppConstants";

const RenderSelectTasks = ({ statusSelectTask, setStatusSelectTask }) => {
  return (
    <select
      value={statusSelectTask}
      onChange={(e) => setStatusSelectTask(e.target.value)}
      className="select-render"
    >
      <option value={ALL_TASKS}>Показать все задачи</option>
      <option value={UNCOMPLETED_TASKS}>Показать невыполненные задачи</option>
      <option value={COMPLETED_TASKS}>Показать выполненные задачи</option>
    </select>
  );
};

export default RenderSelectTasks;

RenderSelectTasks.propTypes = {
  statusSelectTask: PropTypes.string.isRequired,
  setStatusSelectTask: PropTypes.func.isRequired,
};
