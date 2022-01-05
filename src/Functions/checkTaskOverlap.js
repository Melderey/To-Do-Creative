const checkTaskOverlap = (tasks, newTaskText) => {
  for (const { text } of tasks) {
    if (text === newTaskText) {
      return true;
    }
  }
};

export default checkTaskOverlap;
