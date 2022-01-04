import React from "react";
import { uniqueId } from "lodash";
import "./App.css";
import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: "", tasks: [] };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handlerChangeTextForm = this.handlerChangeTextForm.bind(this);
    this.handlerRemoveTask = this.handlerRemoveTask.bind(this);
    this.handlerCheckboxActivate = this.handlerCheckboxActivate.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    const { tasks, newTaskText } = this.state;
    const newTask = {
      id: uniqueId(),
      text: newTaskText,
      checkboxActive: false,
    };
    this.setState(() => ({ newTaskText: "", tasks: [newTask, ...tasks] }));
  }

  handlerChangeTextForm(e) {
    this.setState(() => ({ newTaskText: e.target.value }));
  }

  handlerRemoveTask(id) {
    const { tasks } = this.state;
    const newTasks = tasks.filter((task) => task.id !== id);
    this.setState(() => ({
      tasks: newTasks,
    }));
  }

  handlerCheckboxActivate(id) {
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

  render() {
    return (
      <>
        <RenderForm
          value={this.state}
          handleSubmitForm={this.handleSubmitForm}
          handlerChangeTextForm={this.handlerChangeTextForm}
        />
        <RenderTasks
          tasks={this.state.tasks}
          handlerRemoveTask={this.handlerRemoveTask}
          handlerCheckboxActivate={this.handlerCheckboxActivate}
        />
      </>
    );
  }
}

export default App;
