import type { TaskTypes } from "../types/types";

const checkTaskOverlap = (tasks: TaskTypes[], newTaskText: string): boolean => {
  for (const { text } of tasks) {
    if (text.toLowerCase() === newTaskText.toLowerCase()) {
      return true;
    }
  }
};

export default checkTaskOverlap;
