import React from "react";
import "./App.css";

import handlerChangeTextForm from "./handlersApp/handlerChangeTextForm";
import handleSubmitForm from "./handlersApp/handleSubmitForm";
import handlerRemoveTask from "./handlersApp/handlerRemoveTask";
import handlerCheckboxActivate from "./handlersApp/handlerCheckboxActivate";
import handlerSelectTasks from "./handlersApp/handlerSelectTasks";
import handlerSelectStatusTask from "./handlersApp/handlerSelectStatusTask";
import handleraClearAll from "./handlersApp/handleraClearAll";

import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: "", statusSelectTask: "all tasks", tasks: [] };

    this.handleSubmitForm = handleSubmitForm.bind(this);
    this.handlerChangeTextForm = handlerChangeTextForm.bind(this);
    this.handlerRemoveTask = handlerRemoveTask.bind(this);
    this.handlerCheckboxActivate = handlerCheckboxActivate.bind(this);
    this.handlerSelectTasks = handlerSelectTasks.bind(this);
    this.handlerSelectStatusTask = handlerSelectStatusTask.bind(this);
    this.handleraClearAll = handleraClearAll.bind(this);
  }

  render() {
    return (
      <div className="container">
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
        />
      </div>
    );
  }
}

export default App;
