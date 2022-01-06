import React from "react";
import "./RenderSelectTasks.css";

export default class RenderSelectTasks extends React.Component {
  render() {
    const { handlerSelectTasks, statusSelectTask } = this.props;

    return (
      <select
        value={statusSelectTask}
        onChange={handlerSelectTasks}
        className="select-render"
      >
        <option value="all tasks">Показать все задачи</option>
        <option value="uncompleted tasks">Показать невыполненные задачи</option>
        <option value="completed tasks">Показать выполненные задачи</option>
      </select>
    );
  }
}
