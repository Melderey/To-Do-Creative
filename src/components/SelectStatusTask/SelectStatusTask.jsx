import React from "react";
import PropTypes from "prop-types";
import { BLACK, RED, GREEN, ORANGE, BLUE } from "../../constants/constants";

export default class SelectStatusTask extends React.Component {
  render() {
    const { handlerSelectStatusTask, id, statusTaskColor } = this.props;

    return (
      <select
        value={statusTaskColor}
        onChange={(e) => handlerSelectStatusTask(e, id)}
        className="select-render"
      >
        <option value={BLACK}>Выберите приоритет задачи</option>
        <option value={RED}>Срочно, важно</option>
        <option value={GREEN}>Не срочно, важно</option>
        <option value={ORANGE}>Срочно, не важно</option>
        <option value={BLUE}>Не срочно, не важно</option>
      </select>
    );
  }
}

SelectStatusTask.propTypes = {
  handlerSelectStatusTask: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  statusTaskColor: PropTypes.string.isRequired,
};
