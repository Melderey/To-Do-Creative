import { createSlice } from "@reduxjs/toolkit";
import { uniqueId } from "lodash";

import { BLACK } from "../constants/AppConstants";

const getInitialState = () => [];

const todoSlice = createSlice({
  name: "todoSlice",

  initialState: getInitialState(),

  reducers: {
    add(tasks, action) {
      const text = action.payload;
      const task = {
        id: uniqueId(),
        text: text,
        isCheckboxActive: false,
        isTaskEdit: false,
        statusTaskColor: BLACK,
      };

      return [task, ...tasks];
    },

    remove(tasks, action) {
      const id = action.payload;

      return tasks.filter((task) => task.id !== id);
    },

    clearAllTasks() {
      return [];
    },

    activateUiElement(tasks, action) {
      const { id, nameKeyTask } = action.payload;

      tasks.filter((task) => {
        if (task.id === id) {
          task[nameKeyTask] = !task[nameKeyTask];
          return true;
        }
        return false;
      });
    },

    mapEventValue(tasks, action) {
      const { newValue, id, nameKeyTask } = action.payload;

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
