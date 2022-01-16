import { UNCOMPLETED_TASKS, COMPLETED_TASKS } from "../constants/constants";

const getFiltredTasks = (tasks, statusSelectTask) => {
  let renderTasks = [...tasks];

  if (statusSelectTask === UNCOMPLETED_TASKS) {
    renderTasks = tasks.filter((task) => !task.checkboxActive);
  }

  if (statusSelectTask === COMPLETED_TASKS) {
    renderTasks = tasks.filter((task) => task.checkboxActive);
  }
  return renderTasks;
};

export default getFiltredTasks;
