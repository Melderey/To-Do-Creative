function  handlerRemoveTask(id) {
  const { tasks } = this.state;
  const newTasks = tasks.filter((task) => task.id !== id);
  this.setState(() => ({
    tasks: newTasks,
  }));
}

export default handlerRemoveTask;