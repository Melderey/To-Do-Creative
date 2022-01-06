import React from "react";
import "./RenderForm.css";

export default class RenderForm extends React.Component {
  render() {
    const { value, handleSubmitForm, handlerChangeTextForm } = this.props;

    return (
      <form onSubmit={handleSubmitForm} className="div-flex">
        <input
          className="input-render"
          type="text"
          onChange={handlerChangeTextForm}
          value={value.newTaskText}
          placeholder="Введите текст"
        />

        <button className="button-submit" type="submit">
          Добавить
        </button>
      </form>
    );
  }
}
