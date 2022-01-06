import React from "react";
import getFiltredTasks from "../../functions/getFiltredTasks";
import SelectStatusTask from "../SelectStatusTask/SelectStatusTask";
import "./RenderTasks.css";

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
          <div className="div-flex div-flex-wrap">
            <p style={newStatusColor} className="task-text">
              {text}
            </p>
            <div>
              <div className="div-flex buttons-renders">
                <input
                  className="checkbox-render"
                  type="checkbox"
                  checked={checkboxActive}
                  onChange={() => handlerCheckboxActivate(id)}
                />
                <p>Сделано</p>
                <button
                  className="button-remove"
                  onClick={() => handlerRemoveTask(id)}
                >
                  X
                </button>
              </div>
            </div>
          </div>

          <SelectStatusTask
            handlerSelectStatusTask={handlerSelectStatusTask}
            id={id}
            statusTaskColor={statusTaskColor}
          />
        </div>
      );
    });
  }
}
