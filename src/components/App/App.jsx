import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Hello World" };
  }

  render() {
    return <div>{this.state.value}</div>;
  }
}

export default App;
