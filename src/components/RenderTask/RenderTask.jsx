import React from "react";
import PropTypes from "prop-types";
import RenderTaskIsEdit from "../RenderTaskIsEdit/RenderTaskIsEdit";
import RenderTaskButtons from "../RenderTaskButtons/RenderTaskButtons";
import SelectStatusTask from "../SelectStatusTask/SelectStatusTask";

export default class RenderTask extends React.Component {
  render() {
    const { filtredTasks, handlerSelectStatusTask } = this.props;

    return filtredTasks.map(
      ({ id, text, checkboxActive, statusTaskColor, isTaskEdit }) => {
        const newStatusColor = `status-task-color-${statusTaskColor}`;

        return (
          <li key={id}>
            <div className="div-flex div-flex-wrap">
              <RenderTaskIsEdit
                id={id}
                newStatusColor={newStatusColor}
                text={text}
                isTaskEdit={isTaskEdit}
                {...this.props}
              />

              <RenderTaskButtons
                checkboxActive={checkboxActive}
                id={id}
                {...this.props}
              />
            </div>

            <SelectStatusTask
              handlerSelectStatusTask={handlerSelectStatusTask}
              id={id}
              statusTaskColor={statusTaskColor}
            />
          </li>
        );
      }
    );
  }
}

RenderTask.propTypes = {
  handlerSelectStatusTask: PropTypes.func.isRequired,
  filtredTasks: PropTypes.array.isRequired,
};
