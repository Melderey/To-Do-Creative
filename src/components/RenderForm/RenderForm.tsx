import React, { ChangeEvent } from "react";

import "./RenderForm.css";
import { PropsTypes } from "../../types/types";

const RenderForm = (props: PropsTypes): JSX.Element => {
  const { newTaskText, handleSubmitForm, setNewTaskText } = props;

  return (
    <form onSubmit={handleSubmitForm} className="div-aligns">
      <input
        className="input-render any-form"
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setNewTaskText(e.target.value)
        }
        value={newTaskText}
        placeholder="Введите текст"
      />

      <button className="button-submit button" type="submit">
        Добавить
      </button>
    </form>
  );
};

export default RenderForm;
