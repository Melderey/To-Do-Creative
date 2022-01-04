import React from "react";

export default class RenderSelectTasks extends React.Component {
  render() {
    const { handlerSelectTasks, statusSelectTask } = this.props;

    return (
      <select value={statusSelectTask} onChange={handlerSelectTasks}>
        <option value="all tasks">Показать все задачи</option>
        <option value="uncompleted tasks">Показать невыполненные задачи</option>
        <option value="completed task">Показать выполненные задачи</option>
      </select>
    );
  }
}
