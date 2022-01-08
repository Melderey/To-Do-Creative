function handlerSelectTasks(e) {
  this.setState(() => ({ statusSelectTask: e.target.value }));
}

export default handlerSelectTasks;
