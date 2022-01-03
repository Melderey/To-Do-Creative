import React from "react";

export default class RenderForm extends React.Component {
  render() {
    const { value, handleSubmitForm, handlerChangeTextForm } = this.props;

    return (
      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            type="text"
            onChange={handlerChangeTextForm}
            value={value.newTaskText}
            placeholder="Введите текст"
          />
        </div>
        <button type="submit">add</button>
      </form>
    );
  }
}
