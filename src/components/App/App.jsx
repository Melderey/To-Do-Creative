import React from "react";
import "./App.css";

import handlerChangeTextForm from "./handlersApp/handlerChangeTextForm";
import handleSubmitForm from "./handlersApp/handleSubmitForm";
import handlerRemoveTask from "./handlersApp/handlerRemoveTask";
import handlerCheckboxActivate from "./handlersApp/handlerCheckboxActivate";
import handlerSelectTasks from "./handlersApp/handlerSelectTasks";
import handlerSelectStatusTask from "./handlersApp/handlerSelectStatusTask";
import handleraClearAll from "./handlersApp/handleraClearAll";
import handlerTaskEdit from "./handlersApp/handlerTaskEdit";
import handlerTaskButtonEdit from "./handlersApp/handlerTaskButtonEdit";

import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";
import ThemeTogglerButton from "../ThemeTogglerButton/ThemeTogglerButton";

import { ThemeContext, themesColor } from "../../context/theme-context";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState((state) => {
        return {
          themeColor:
            state.themeColor === themesColor.dark
              ? themesColor.light
              : themesColor.dark,
        };
      });
    };

    this.state = {
      newTaskText: "",
      statusSelectTask: "all tasks",
      themeColor: themesColor.light,
      toggleTheme: this.toggleTheme,
      tasks: [],
    };

    this.handleSubmitForm = handleSubmitForm.bind(this);
    this.handlerChangeTextForm = handlerChangeTextForm.bind(this);
    this.handlerRemoveTask = handlerRemoveTask.bind(this);
    this.handlerCheckboxActivate = handlerCheckboxActivate.bind(this);
    this.handlerSelectTasks = handlerSelectTasks.bind(this);
    this.handlerSelectStatusTask = handlerSelectStatusTask.bind(this);
    this.handleraClearAll = handleraClearAll.bind(this);
    this.handlerTaskEdit = handlerTaskEdit.bind(this);
    this.handlerTaskButtonEdit = handlerTaskButtonEdit.bind(this);
  }

  render() {
    const installBodyStyle = () =>
      (document.body.className = this.state.themeColor);

    installBodyStyle();

    return (
      <div className="container">
        <div>
          <ThemeContext.Provider value={this.state.toggleTheme}>
            <ThemeTogglerButton />
          </ThemeContext.Provider>
        </div>

        <div className="div-flex">
          <h2>Список задач</h2>
          <div className="button-div">
            <button className="button-danger" onClick={this.handleraClearAll}>
              Очистить всё
            </button>
          </div>
        </div>

        <div>
          <RenderForm
            value={this.state}
            handleSubmitForm={this.handleSubmitForm}
            handlerChangeTextForm={this.handlerChangeTextForm}
          />
        </div>

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
