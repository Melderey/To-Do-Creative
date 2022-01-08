function handlerCheckboxActivate(id) {
  const { tasks } = this.state;
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.checkboxActive = !task.checkboxActive;
    }
    return task;
  });

  this.setState(() => ({
    tasks: newTasks,
  }));
}

export default handlerCheckboxActivate;
