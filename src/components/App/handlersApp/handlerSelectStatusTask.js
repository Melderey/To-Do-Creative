function handlerSelectStatusTask(e, id) {
  const { tasks } = this.state;
  const newStatusTaskColor = e.target.value;
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.statusTaskColor = newStatusTaskColor;
    }
    return task;
  });

  this.setState(() => ({
    tasks: newTasks,
  }));
}

export default handlerSelectStatusTask;
