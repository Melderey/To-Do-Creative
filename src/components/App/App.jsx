import React from "react";
import { uniqueId } from "lodash";
import "./App.css";
import checkTaskOverlap from "../../checkTaskOverlap";
import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: "", statusSelectTask: "all tasks", tasks: [] };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handlerChangeTextForm = this.handlerChangeTextForm.bind(this);
    this.handlerRemoveTask = this.handlerRemoveTask.bind(this);
    this.handlerCheckboxActivate = this.handlerCheckboxActivate.bind(this);
    this.handlerSelectTasks = this.handlerSelectTasks.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    const { tasks, newTaskText } = this.state;
    const normalizeNewTaskText = newTaskText.trim();
    if (normalizeNewTaskText.length === 0) {
      return alert("Ввведиет новую задачу!");
    }
    if (checkTaskOverlap(tasks, normalizeNewTaskText)) {
      return alert("Такая задача уже существует, введиет новую задачу!");
    }
    const newTask = {
      id: uniqueId(),
      text: normalizeNewTaskText,
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

  handlerSelectTasks(e) {
    this.setState(() => ({ statusSelectTask: e.target.value }));
  }

  render() {
    return (
      <>
        <RenderForm
          value={this.state}
          handleSubmitForm={this.handleSubmitForm}
          handlerChangeTextForm={this.handlerChangeTextForm}
        />
        <RenderSelectTasks
          handlerSelectTasks={this.handlerSelectTasks}
          statusSelectTask={this.state.statusSelectTask}
        />
        <RenderTasks
          tasks={this.state.tasks}
          statusSelectTask={this.state.statusSelectTask}
          handlerRemoveTask={this.handlerRemoveTask}
          handlerCheckboxActivate={this.handlerCheckboxActivate}
        />
      </>
    );
  }
}

export default App;
