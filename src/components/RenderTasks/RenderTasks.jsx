import React from "react";

export default class RenderTasks extends React.Component {
  render() {
    const { tasks, handlerRemoveTask, handlerCheckboxActivate } = this.props;

    return tasks.map(({ id, text, checkboxActive }) => {
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
