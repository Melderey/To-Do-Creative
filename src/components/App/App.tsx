import React, { useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import { RootState } from "../../types/types";
import checkTaskOverlap from "../../functions/checkTaskOverlap";
import { ALL_TASKS } from "../../constants/AppConstants";
import { themesColor } from "../../context/theme-context";
import {
  add,
  remove,
  clearAllTasks,
  activateUiElement,
  mapEventValue,
} from "../../reduxToolkit/todoSlice";

import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";
import RenderHeader from "../RenderHeader/RenderHeader";

const App = () => {
  const [newTaskText, setNewTaskText] = useState<string>("");
  const [statusSelectTask, setStatusSelectTask] = useState<string>(ALL_TASKS);
  const [themeColor, setThemeColor] = useState<string>(themesColor.light);
  const tasks = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    setThemeColor((prevState) => {
      if (prevState === themesColor.dark) {
        return themesColor.light;
      }
      return themesColor.dark;
    });
  };

  const handlerClearAll = () => {
    setNewTaskText("");
    setStatusSelectTask(ALL_TASKS);
    dispatch(clearAllTasks());
  };

  const handleSubmitForm = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const normalizeNewTaskText: string = newTaskText.trim();

    if (!normalizeNewTaskText) {
      return alert("Ввведиет новую задачу!");
    }

    if (checkTaskOverlap(tasks, normalizeNewTaskText)) {
      return alert("Такая задача уже существует, введите новую задачу!");
    }

    setNewTaskText("");
    dispatch(add(normalizeNewTaskText));
  };

  const handlerRemoveTask = (id: string) => {
    dispatch(remove(id));
  };

  const handlerActivateUiElement = (id: string, nameKeyTask: string) => {
    dispatch(activateUiElement({ id, nameKeyTask }));
  };

  const handlerMapEventValue = (
    e: ChangeEvent<HTMLSelectElement>,
    id: string,
    nameKeyTask: string
  ) => {
    const newValue: string = e.target.value;
    dispatch(mapEventValue({ newValue, id, nameKeyTask }));
  };

  useEffect(() => {
    document.body.className = themeColor;
  }, [themeColor]);

  return (
    <div className="container">
      <RenderHeader
        toggleTheme={toggleTheme}
        handlerClearAll={handlerClearAll}
      />

      <RenderForm
        newTaskText={newTaskText}
        handleSubmitForm={handleSubmitForm}
        setNewTaskText={setNewTaskText}
        statusSelectTask={""}
        setStatusSelectTask={setStatusSelectTask}
        newStatusColor={""}
        handlerRemoveTask={handlerRemoveTask}
        handlerActivateUiElement={handlerActivateUiElement}
        handlerMapEventValue={handlerMapEventValue}
      />

      <RenderSelectTasks
        setStatusSelectTask={setStatusSelectTask}
        statusSelectTask={statusSelectTask}
        newTaskText={""}
        setNewTaskText={setNewTaskText}
        handleSubmitForm={handleSubmitForm}
        newStatusColor={""}
        handlerRemoveTask={handlerRemoveTask}
        handlerActivateUiElement={handlerActivateUiElement}
        handlerMapEventValue={handlerMapEventValue}
      />

      <RenderTasks
        tasks={tasks}
        statusSelectTask={statusSelectTask}
        handlerRemoveTask={handlerRemoveTask}
        handlerActivateUiElement={handlerActivateUiElement}
        handlerMapEventValue={handlerMapEventValue}
        newTaskText={""}
        setNewTaskText={setNewTaskText}
        setStatusSelectTask={setStatusSelectTask}
        handleSubmitForm={handleSubmitForm}
        newStatusColor={""}
      />
    </div>
  );
};

export default App;
