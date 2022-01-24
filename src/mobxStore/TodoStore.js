import { makeAutoObservable } from "mobx";
import { uniqueId } from "lodash";

import { BLACK } from "../constants/AppConstants";

class TodoStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  add(text) {
    const task = {
      id: uniqueId(),
      text: text,
      isCheckboxActive: false,
      isTaskEdit: false,
      statusTaskColor: BLACK,
    };

    this.tasks.push(task);
  }

  remove(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  clearAllTasks() {
    this.tasks = [];
  }

  activateUiElement(props) {
    const { id, nameKeyTask } = props;

    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task[nameKeyTask] = !task[nameKeyTask];
      }
      return { ...task };
    });
  }

  mapEventValue(props) {
    const { newValue, id, nameKeyTask } = props;

    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        task[nameKeyTask] = newValue;
      }
      return { ...task };
    });
  }
}

export const observableTodoStore = new TodoStore();
