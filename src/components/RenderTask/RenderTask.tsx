import React from "react";

import RenderTaskIsEdit from "../RenderTaskIsEdit/RenderTaskIsEdit";
import RenderTaskButtons from "../RenderTaskButtons/RenderTaskButtons";
import SelectStatusTask from "../SelectStatusTask/SelectStatusTask";
import { CombainedFiltredTypes } from "../../types/types";

const RenderTask = (props: CombainedFiltredTypes): JSX.Element => {
  const {
    filtredTasks,
    handlerMapEventValue,
    setNewTaskText,
    setStatusSelectTask,
    handleSubmitForm,
    handlerRemoveTask,
    handlerActivateUiElement,
  } = props;

  return (
    <>
      {filtredTasks.map(
        ({ id, text, isCheckboxActive, statusTaskColor, isTaskEdit }) => {
          return (
            <li key={id}>
              <div className="div-aligns div-aligns-wrap">
                <RenderTaskIsEdit
                  isCheckboxActive={false}
                  statusTaskColor={statusTaskColor}
                  id={id}
                  text={text}
                  isTaskEdit={isTaskEdit}
                  {...props}
                />

                <RenderTaskButtons
                  text={""}
                  isTaskEdit={false}
                  statusTaskColor={""}
                  isCheckboxActive={isCheckboxActive}
                  id={id}
                  {...props}
                />
              </div>

              <SelectStatusTask
                handlerMapEventValue={handlerMapEventValue}
                id={id}
                statusTaskColor={statusTaskColor}
                newTaskText={""}
                setNewTaskText={setNewTaskText}
                statusSelectTask={""}
                setStatusSelectTask={setStatusSelectTask}
                handleSubmitForm={handleSubmitForm}
                handlerRemoveTask={handlerRemoveTask}
                handlerActivateUiElement={handlerActivateUiElement}
                text={text}
                isCheckboxActive={false}
                isTaskEdit={false}
              />
            </li>
          );
        }
      )}
    </>
  );
};

export default RenderTask;
