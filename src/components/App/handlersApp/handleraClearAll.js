function handleraClearAll(e) {
  e.preventDefault();
  this.setState(() => ({
    newTaskText: "",
    statusSelectTask: "all tasks",
    tasks: [],
  }));
}

export default handleraClearAll;
