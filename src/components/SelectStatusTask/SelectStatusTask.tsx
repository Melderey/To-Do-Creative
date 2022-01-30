import React from "react";

import { CombainedTypes } from "../../types/types";
import {
  BLACK,
  RED,
  GREEN,
  ORANGE,
  BLUE,
  NAME_KEY_SELECT_TASK,
} from "../../constants/AppConstants";

const SelectStatusTask = (props: CombainedTypes): JSX.Element => {
  const { handlerMapEventValue, id, statusTaskColor } = props;

  return (
    <select
      value={statusTaskColor}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handlerMapEventValue(e, id, NAME_KEY_SELECT_TASK)
      }
      className="selecter any-form"
    >
      <option value={BLACK}>Выберите приоритет задачи</option>
      <option value={RED}>Срочно, важно</option>
      <option value={GREEN}>Не срочно, важно</option>
      <option value={ORANGE}>Срочно, не важно</option>
      <option value={BLUE}>Не срочно, не важно</option>
    </select>
  );
};

export default SelectStatusTask;
