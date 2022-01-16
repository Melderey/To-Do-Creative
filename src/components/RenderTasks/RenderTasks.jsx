import React from "react";
import getFiltredTasks from "../../functions/getFiltredTasks";
import RenderTask from "../RenderTask/RenderTask";
import "./RenderTasks.css";

export default class RenderTasks extends React.Component {
  render() {
    const { tasks, statusSelectTask } = this.props;

    const filtredTasks = getFiltredTasks(tasks, statusSelectTask);

    return (
      <ul>
        <RenderTask filtredTasks={filtredTasks} {...this.props} />
      </ul>
    );
  }
}
