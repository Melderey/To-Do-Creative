const checkTaskOverlap = (tasks, newTaskText) => {
  for (const { text } of tasks) {
    if (text.toLowerCase() === newTaskText.toLowerCase()) {
      return true;
    }
  }
};

export default checkTaskOverlap;
