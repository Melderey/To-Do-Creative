import { createSlice } from "@reduxjs/toolkit";
import { TaskTypes, PropsActionsTypes } from "../types/types";

import { BLACK } from "../constants/AppConstants";

const todoSlice = createSlice({
  name: "todoSlice",

  initialState: [],

  reducers: {
    add: (tasks: TaskTypes[], action): TaskTypes[] => {
      const text: string = action.payload;
      const task: TaskTypes = {
        id: Date.now().toString(),
        text: text,
        isCheckboxActive: false,
        isTaskEdit: false,
        statusTaskColor: BLACK,
      };

      return [task, ...tasks];
    },

    remove: (tasks: TaskTypes[], action): any => {
      const id: string = action.payload;

      return tasks.filter((task) => task.id !== id);
    },

    clearAllTasks: (): [] => {
      return [];
    },

    activateUiElement: (tasks, action): void => {
      const { id, nameKeyTask }: PropsActionsTypes = action.payload;

      tasks.filter((task) => {
        if (task.id === id) {
          task[nameKeyTask] = !task[nameKeyTask];
          return true;
        }
        return false;
      });
    },

    mapEventValue: (tasks, action): void => {
      const { newValue, id, nameKeyTask }: PropsActionsTypes = action.payload;

      tasks.filter((task) => {
        if (task.id === id) {
          task[nameKeyTask] = newValue;
          return true;
        }
        return false;
      });
    },
  },
});

export const { add, remove, clearAllTasks, activateUiElement, mapEventValue } =
  todoSlice.actions;

export default todoSlice.reducer;
