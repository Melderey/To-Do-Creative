import React from "react";
import PropTypes from "prop-types";
import "./RenderSelectTasks.css";
import {
  UNCOMPLETED_TASKS,
  COMPLETED_TASKS,
  ALL_TASKS,
} from "../../constants/constants";

export default class RenderSelectTasks extends React.Component {
  render() {
    const { handlerSelectTasks, statusSelectTask } = this.props;

    return (
      <select
        value={statusSelectTask}
        onChange={handlerSelectTasks}
        className="select-render"
      >
        <option value={ALL_TASKS}>Показать все задачи</option>
        <option value={UNCOMPLETED_TASKS}>Показать невыполненные задачи</option>
        <option value={COMPLETED_TASKS}>Показать выполненные задачи</option>
      </select>
    );
  }
}

RenderSelectTasks.propTypes = {
  statusSelectTask: PropTypes.string.isRequired,
  handlerSelectTasks: PropTypes.func.isRequired,
};
