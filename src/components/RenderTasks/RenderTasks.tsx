import React from "react";

import getFiltredTasks from "../../functions/getFiltredTasks";
import RenderTask from "../RenderTask/RenderTask";
import "./RenderTasks.css";
import { CombainedTasksTypes } from "../../types/types";

const RenderTasks = (props: CombainedTasksTypes): JSX.Element => {
  const { tasks, statusSelectTask } = props;
  const filtredTasks = getFiltredTasks(tasks, statusSelectTask);

  return (
    <ul>
      <RenderTask filtredTasks={filtredTasks} {...props} />
    </ul>
  );
};

export default RenderTasks;
