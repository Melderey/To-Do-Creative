import React from "react";
import { NAME_KEY_TEXT_TASK } from "../../constants/constants";

const RenderTaskIsEdit = (props) => {
  const { handlerMapEventValue, newStatusColor, text, isTaskEdit, id } = props;

  return (
    <>
      {isTaskEdit ? (
        <textarea
          className={`task-text input-render ${newStatusColor}`}
          onChange={(e) => handlerMapEventValue(e, id, NAME_KEY_TEXT_TASK)}
          value={text}
        ></textarea>
      ) : (
        <div className={`task-text ${newStatusColor}`}>{text}</div>
      )}
    </>
  );
};

export default RenderTaskIsEdit;
