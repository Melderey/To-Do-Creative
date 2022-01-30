import { TaskTypes } from "../types/types";

export const UNCOMPLETED_TASKS: string = "uncompleted tasks";
export const COMPLETED_TASKS: string = "completed tasks";
export const ALL_TASKS: string = "all tasks";

export const BLACK: string = "black";
export const RED: string = "red";
export const GREEN: string = "green";
export const ORANGE: string = "orange";
export const BLUE: string = "blue";

export const NAME_EDIT_TASK: keyof TaskTypes = "isTaskEdit";
export const NAME_KEY_CHECKBOX_TASK: keyof TaskTypes = "isCheckboxActive";
export const NAME_KEY_SELECT_TASK: keyof TaskTypes = "statusTaskColor";
export const NAME_KEY_TEXT_TASK: keyof TaskTypes = "text";
