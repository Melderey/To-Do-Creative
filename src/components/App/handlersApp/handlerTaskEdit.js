function handlerTaskEdit(e, id) {
  const { tasks } = this.state;
  const newTaskText = e.target.value;
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      task.text = newTaskText;
    }
    return task;
  });

  this.setState(() => ({
    tasks: newTasks,
  }));
}

export default handlerTaskEdit;
