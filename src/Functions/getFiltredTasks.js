import {
  UNCOMPLETED_TASKS,
  COMPLETED_TASKS,
  NAME_KEY_CHECKBOX_TASK,
} from "../constants/constants";

const getFiltredTasks = (tasks, statusSelectTask) => {
  let renderTasks = [...tasks];

  if (statusSelectTask === UNCOMPLETED_TASKS) {
    renderTasks = tasks.filter((task) => !task[NAME_KEY_CHECKBOX_TASK]);
  }

  if (statusSelectTask === COMPLETED_TASKS) {
    renderTasks = tasks.filter((task) => task[NAME_KEY_CHECKBOX_TASK]);
  }

  return renderTasks;
};

export default getFiltredTasks;
