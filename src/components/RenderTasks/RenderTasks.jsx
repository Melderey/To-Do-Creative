import React from "react";
import SelectStatusTask from "../SelectStatusTask/SelectStatusTask";

export default class RenderTasks extends React.Component {
  render() {
    const {
      tasks,
      statusSelectTask,
      handlerRemoveTask,
      handlerCheckboxActivate,
      handlerSelectStatusTask,
    } = this.props;

    let renderTask = [...tasks];

    if (statusSelectTask === "uncompleted tasks") {
      renderTask = tasks.filter((task) => !task.checkboxActive);
    }

    if (statusSelectTask === "completed task") {
      renderTask = tasks.filter((task) => task.checkboxActive);
    }

    return renderTask.map(({ id, text, checkboxActive, statusTaskColor }) => {
      const newStatusColor = { color: statusTaskColor };

      return (
        <div key={id}>
          <div style={newStatusColor}>{text}</div>
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
          <SelectStatusTask
            handlerSelectStatusTask={handlerSelectStatusTask}
            id={id}
            statusTaskColor={statusTaskColor}
          />
          <hr />
        </div>
      );
    });
  }
}
