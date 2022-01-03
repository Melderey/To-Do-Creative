import React from "react";
import { uniqueId } from "lodash";
import "./App.css";
import RenderForm from "../RenderForm/RenderForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTaskText: "", tasks: [] };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handlerChangeTextForm = this.handlerChangeTextForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    const { tasks, newTaskText } = this.state;
    const newTask = { id: uniqueId(), text: newTaskText };
    this.setState(() => ({ newTaskText: "", tasks: [newTask, ...tasks] }));
  }

  handlerChangeTextForm(e) {
    this.setState(() => ({ newTaskText: e.target.value }));
  }

  render() {
    return (
      <RenderForm
        value={this.state}
        handleSubmitForm={this.handleSubmitForm}
        handlerChangeTextForm={this.handlerChangeTextForm}
      />
    );
  }
}

export default App;
