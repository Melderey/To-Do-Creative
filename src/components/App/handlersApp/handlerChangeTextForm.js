function handlerChangeTextForm(e) {
  this.setState(() => ({ newTaskText: e.target.value }));
}

export default handlerChangeTextForm;
