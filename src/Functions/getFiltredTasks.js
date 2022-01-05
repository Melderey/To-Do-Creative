const getFiltredTasks = (tasks, statusSelectTask) => {
  let renderTasks = [...tasks];

  if (statusSelectTask === "uncompleted tasks") {
    renderTasks = tasks.filter((task) => !task.checkboxActive);
  }

  if (statusSelectTask === "completed tasks") {
    renderTasks = tasks.filter((task) => task.checkboxActive);
  }
  return renderTasks;
};

export default getFiltredTasks;
