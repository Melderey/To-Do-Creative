import React from "react";
/* import "./RenderForm.css"; */

export default class RenderForm extends React.Component {
  render() {
    const { value, handleSubmitForm, handlerChangeTextForm } = this.props;

    return (
      <form onSubmit={handleSubmitForm} className="divFlexStart">
        <div>
          <input
            type="text"
            onChange={handlerChangeTextForm}
            value={value.newTaskText}
            placeholder="Введите текст"
          />
        </div>
        <button type="submit">Добавить</button>
      </form>
    );
  }
}
