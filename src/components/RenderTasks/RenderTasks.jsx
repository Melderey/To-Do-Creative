import React from "react";

export default class RenderTasks extends React.Component {
  render() {
    const {
      tasks,
      statusSelectTask,
      handlerRemoveTask,
      handlerCheckboxActivate,
    } = this.props;

    let renderTask = [...tasks];

    if (statusSelectTask === "uncompleted tasks") {
      renderTask = tasks.filter((task) => !task.checkboxActive);
    }

    if (statusSelectTask === "completed task") {
      renderTask = tasks.filter((task) => task.checkboxActive);
    }

    return renderTask.map(({ id, text, checkboxActive }) => {
      return (
        <div key={id}>
          <div>{text}</div>

          <div>
            <input
              type="checkbox"
              checked={checkboxActive}
              onChange={() => handlerCheckboxActivate(id)}
            />
          </div>

          <div>
            <button onClick={() => handlerRemoveTask(id)}>X</button>
          </div>
          <hr />
        </div>
      );
    });
  }
}
