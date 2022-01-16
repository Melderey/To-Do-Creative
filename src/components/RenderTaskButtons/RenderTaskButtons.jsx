import React from "react";

export default class RenderTaskButtons extends React.Component {
  render() {
    const {
      checkboxActive,
      id,
      handlerRemoveTask,
      handlerCheckboxActivate,
      handlerTaskButtonEdit,
    } = this.props;

    return (
      <div>
        <div className="div-flex buttons-renders">
          <input
            className="checkbox-render"
            type="checkbox"
            checked={checkboxActive}
            onChange={() => handlerCheckboxActivate(id)}
          />
          <button
            className="button-edit"
            onClick={() => handlerTaskButtonEdit(id)}
          >
            Изменить
          </button>
          <button
            className="button-remove"
            onClick={() => handlerRemoveTask(id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
