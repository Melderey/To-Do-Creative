import React from "react";

export default class RenderTasks extends React.Component {
  render() {
    const { tasks, handlerRemoveTask } = this.props;

    return tasks.map(({ id, text }) => {
      return (
        <div key={id}>
          <div>{text}</div>
          <div>
            <button onClick={() => handlerRemoveTask(id)}>X</button>
          </div>
          <hr />
        </div>
      );
    });
  }
}
