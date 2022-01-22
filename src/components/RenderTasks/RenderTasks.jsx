import React from "react";
import PropTypes from "prop-types";

import getFiltredTasks from "../../functions/getFiltredTasks";
import RenderTask from "../RenderTask/RenderTask";
import "./RenderTasks.css";

const RenderTasks = (props) => {
  const { tasks, statusSelectTask } = props;
  const filtredTasks = getFiltredTasks(tasks, statusSelectTask);

  return (
    <ul>
      <RenderTask filtredTasks={filtredTasks} {...props} />
    </ul>
  );
};

export default RenderTasks;

RenderTasks.propTypes = {
  statusSelectTask: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};
