import React, { ChangeEvent } from "react";

import { PropsTypes } from "../../types/types";
import {
  UNCOMPLETED_TASKS,
  COMPLETED_TASKS,
  ALL_TASKS,
} from "../../constants/AppConstants";

const RenderSelectTasks = (props: PropsTypes): JSX.Element => {
  const { statusSelectTask, setStatusSelectTask } = props;

  return (
    <select
      value={statusSelectTask}
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        setStatusSelectTask(e.target.value)
      }
      className="selecter any-form"
    >
      <option value={ALL_TASKS}>Показать все задачи</option>
      <option value={UNCOMPLETED_TASKS}>Показать невыполненные задачи</option>
      <option value={COMPLETED_TASKS}>Показать выполненные задачи</option>
    </select>
  );
};

export default RenderSelectTasks;
