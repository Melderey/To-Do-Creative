import React from "react";

export default class SelectStatusTask extends React.Component {
  render() {
    const { handlerSelectStatusTask, id, statusTaskColor } = this.props;

    return (
      <select
        value={statusTaskColor}
        onChange={(e) => handlerSelectStatusTask(e, id)}
        className="select-render"
      >
        <option value={"black"}>Выберите приоритет задачи</option>
        <option value={"red"}>Срочно, важно</option>
        <option value={"green"}>Не срочно, важно</option>
        <option value={"orange"}>Срочно, не важно</option>
        <option value={"blue"}>Не срочно, не важно</option>
      </select>
    );
  }
}
