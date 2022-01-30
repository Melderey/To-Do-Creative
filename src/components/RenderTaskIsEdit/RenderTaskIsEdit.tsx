import React from "react";

import { NAME_KEY_TEXT_TASK } from "../../constants/AppConstants";
import { CombainedTypes } from "../../types/types";

const RenderTaskIsEdit = (props: CombainedTypes): JSX.Element => {
  const { handlerMapEventValue, statusTaskColor, text, isTaskEdit, id } = props;
  const newStatusColor = `status-task-color-${statusTaskColor}`;

  return (
    <>
      {isTaskEdit ? (
        <textarea
          className={`task-text input-render any-form ${newStatusColor}`}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handlerMapEventValue(e, id, NAME_KEY_TEXT_TASK)
          }
          value={text}
        ></textarea>
      ) : (
        <div className={`task-text ${newStatusColor}`}>{text}</div>
      )}
    </>
  );
};

export default RenderTaskIsEdit;
