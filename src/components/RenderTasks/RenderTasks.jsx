import React from "react";
import getFiltredTasks from "../../Functions/getFiltredTasks";
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

    const filtredTasks = getFiltredTasks(tasks, statusSelectTask);

    return filtredTasks.map(({ id, text, checkboxActive, statusTaskColor }) => {
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
