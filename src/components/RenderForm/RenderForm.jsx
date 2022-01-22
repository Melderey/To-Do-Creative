import React from "react";
import PropTypes from "prop-types";

import "./RenderForm.css";

const RenderForm = (props) => {
  const { newTaskText, handleSubmitForm, setNewTaskText } = props;

  return (
    <form onSubmit={handleSubmitForm} className="div-flex">
      <input
        className="input-render"
        type="text"
        onChange={(e) => setNewTaskText(e.target.value)}
        value={newTaskText}
        placeholder="Введите текст"
      />

      <button className="button-submit" type="submit">
        Добавить
      </button>
    </form>
  );
};

export default RenderForm;

RenderForm.propTypes = {
  newTaskText: PropTypes.string.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  setNewTaskText: PropTypes.func.isRequired,
};
