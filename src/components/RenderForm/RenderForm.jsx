import React from "react";
import "./RenderForm.css";
import PropTypes from "prop-types";

export default class RenderForm extends React.Component {
  render() {
    const { newTaskText, handleSubmitForm, handlerChangeTextForm } = this.props;

    return (
      <form onSubmit={handleSubmitForm} className="div-flex">
        <input
          className="input-render"
          type="text"
          onChange={handlerChangeTextForm}
          value={newTaskText}
          placeholder="Введите текст"
        />

        <button className="button-submit" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}

RenderForm.propTypes = {
  newTaskText: PropTypes.string.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  handlerChangeTextForm: PropTypes.func.isRequired,
};
