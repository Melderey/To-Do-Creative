import React from "react";

export type TaskTypes = {
  id: string;
  text: string;
  isCheckboxActive: boolean;
  isTaskEdit: boolean;
  statusTaskColor: string;
};

export type PropsTypes = {
  newTaskText: string;
  newStatusColor?: string;
  setNewTaskText: (newTaskText: string) => void;

  statusSelectTask: string;
  setStatusSelectTask: (statusSelectTask: string) => void;

  handleSubmitForm: React.FormEventHandler<HTMLFormElement> | any;

  handlerRemoveTask: (id: string) => void;
  handlerActivateUiElement: (id: string, nameKeyTask: string) => void;
  handlerMapEventValue: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
    id: string,
    nameKeyTask: string
  ) => void;
};

export type FiltredTaskTypes = {
  filtredTasks: TaskTypes[] | [];
};

export type TasksTypes = {
  tasks: TaskTypes[] | [];
};

export type RootState = {
  todo: TaskTypes[] | [];
};

export type PropsActionsTypes = {
  newValue?: string;
  id?: string;
  nameKeyTask?: string;
};

export type CombainedTypes = PropsTypes & TaskTypes;

export type CombainedFiltredTypes = PropsTypes & FiltredTaskTypes;

export type CombainedTasksTypes = PropsTypes & TasksTypes;
