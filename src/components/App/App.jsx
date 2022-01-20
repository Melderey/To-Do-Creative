import React from "react";
import "./App.css";
import { uniqueId } from "lodash";

import checkTaskOverlap from "../../functions/checkTaskOverlap";
import { ALL_TASKS, BLACK } from "../../constants/constants";

import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: "", statusSelectTask: ALL_TASKS, tasks: [] };

    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handlerChangeTextForm = this.handlerChangeTextForm.bind(this);
    this.handlerRemoveTask = this.handlerRemoveTask.bind(this);
    this.handlerCheckboxActivate = this.handlerCheckboxActivate.bind(this);
    this.handlerSelectTasks = this.handlerSelectTasks.bind(this);
    this.handlerSelectStatusTask = this.handlerSelectStatusTask.bind(this);
    this.handlerClearAll = this.handlerClearAll.bind(this);
    this.handlerTaskEdit = this.handlerTaskEdit.bind(this);
    this.handlerTaskButtonEdit = this.handlerTaskButtonEdit.bind(this);
  }

  handlerClearAll(e) {
    e.preventDefault();
    this.setState({
      newTaskText: "",
      statusSelectTask: ALL_TASKS,
      tasks: [],
    });
  }

  handlerChangeTextForm(e) {
    this.setState({ newTaskText: e.target.value });
  }

  handlerCheckboxActivate(id) {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.checkboxActive = !task.checkboxActive;
        }
        return task;
      });

      return { tasks: newTasks };
    });
  }

  handlerRemoveTask(id) {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const newTasks = tasks.filter((task) => task.id !== id);

      return { tasks: newTasks };
    });
  }

  handlerSelectStatusTask(e, id) {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const newStatusTaskColor = e.target.value;
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.statusTaskColor = newStatusTaskColor;
        }
        return task;
      });

      return { tasks: newTasks };
    });
  }

  handlerSelectTasks(e) {
    this.setState({ statusSelectTask: e.target.value });
  }

  handlerTaskButtonEdit(id) {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.isTaskEdit = !task.isTaskEdit;
        }
        return task;
      });

      return { tasks: newTasks };
    });
  }

  handlerTaskEdit(e, id) {
    this.setState((prevState) => {
      const { tasks } = prevState;
      const newTaskText = e.target.value;
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.text = newTaskText;
        }
        return task;
      });

      return { tasks: newTasks };
    });
  }

  handleSubmitForm(e) {
    this.setState((prevState) => {
      e.preventDefault();
      const { tasks, newTaskText } = prevState;
      const normalizeNewTaskText = newTaskText.trim();

      if (!normalizeNewTaskText) {
        return alert("Ввведиет новую задачу!");
      }
      if (checkTaskOverlap(tasks, normalizeNewTaskText)) {
        return alert("Такая задача уже существует, введите новую задачу!");
      }

      const newTask = {
        id: uniqueId(),
        text: normalizeNewTaskText,
        checkboxActive: false,
        isTaskEdit: false,
        statusTaskColor: BLACK,
      };

      return { newTaskText: "", tasks: [newTask, ...tasks] };
    });
  }

  render() {
    return (
      <div className="container">
        <div className="div-flex">
          <h2>Список задач</h2>

          <div className="button-div">
            <button className="button-danger" onClick={this.handlerClearAll}>
              Очистить всё
            </button>
          </div>
        </div>

        <RenderForm
          newTaskText={this.state.newTaskText}
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
          handlerSelectStatusTask={this.handlerSelectStatusTask}
          handlerTaskButtonEdit={this.handlerTaskButtonEdit}
          handlerTaskEdit={this.handlerTaskEdit}
        />
      </div>
    );
  }
}

export default App;
