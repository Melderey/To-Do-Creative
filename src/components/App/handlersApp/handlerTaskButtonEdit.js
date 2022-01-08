function handlerTaskButtonEdit(id) {
  const { tasks } = this.state;
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.isTaskEdit = !task.isTaskEdit;
    }
    return task;
  });

  this.setState(() => ({
    tasks: newTasks,
  }));
}

export default handlerTaskButtonEdit;
