import React from "react";

import RenderTaskIsEdit from "../RenderTaskIsEdit/RenderTaskIsEdit";
import RenderTaskButtons from "../RenderTaskButtons/RenderTaskButtons";
import SelectStatusTask from "../SelectStatusTask/SelectStatusTask";

const RenderTask = (props) => {
  const { filtredTasks, handlerMapEventValue } = props;

  return filtredTasks.map(
    ({ id, text, isCheckboxActive, statusTaskColor, isTaskEdit }) => {
      const newStatusColor = `status-task-color-${statusTaskColor}`;

      return (
        <li key={id}>
          <div className="div-flex div-flex-wrap">
            <RenderTaskIsEdit
              id={id}
              newStatusColor={newStatusColor}
              text={text}
              isTaskEdit={isTaskEdit}
              {...props}
            />

            <RenderTaskButtons
              isCheckboxActive={isCheckboxActive}
              id={id}
              {...props}
            />
          </div>

          <SelectStatusTask
            handlerMapEventValue={handlerMapEventValue}
            id={id}
            statusTaskColor={statusTaskColor}
          />
        </li>
      );
    }
  );
};

export default RenderTask;
