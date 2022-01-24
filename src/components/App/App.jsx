import React, { useState, useEffect } from "react";
import { observer } from "mobx-react-lite";

import "./App.css";
import checkTaskOverlap from "../../functions/checkTaskOverlap";
import { ALL_TASKS } from "../../constants/AppConstants";
import { themesColor } from "../../context/theme-context";
import { observableTodoStore } from "../../mobxStore/TodoStore";

import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";
import RenderHeader from "../RenderHeader/RenderHeader";

const App = observer(() => {
  const [newTaskText, setNewTaskText] = useState("");
  const [statusSelectTask, setStatusSelectTask] = useState(ALL_TASKS);
  const [themeColor, setThemeColor] = useState(themesColor.light);

  const tasks = observableTodoStore.tasks;

  const toggleTheme = () => {
    setThemeColor((prevState) => {
      if (prevState === themesColor.dark) {
        return themesColor.light;
      }
      return themesColor.dark;
    });
  };

  const handlerClearAll = (e) => {
    e.preventDefault();
    setNewTaskText("");
    setStatusSelectTask(ALL_TASKS);
    observableTodoStore.clearAllTasks();
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const normalizeNewTaskText = newTaskText.trim();

    if (!normalizeNewTaskText) {
      return alert("Ввведиет новую задачу!");
    }

    if (checkTaskOverlap(tasks, normalizeNewTaskText)) {
      return alert("Такая задача уже существует, введите новую задачу!");
    }

    setNewTaskText("");
    observableTodoStore.add(normalizeNewTaskText);
  };

  const handlerRemoveTask = (id) => {
    observableTodoStore.remove(id);
  };

  const handlerActivateUiElement = (id, nameKeyTask) => {
    observableTodoStore.activateUiElement({ id, nameKeyTask });
  };

  const handlerMapEventValue = (e, id, nameKeyTask) => {
    const newValue = e.target.value;
    observableTodoStore.mapEventValue({ newValue, id, nameKeyTask });
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
      />

      <RenderSelectTasks
        setStatusSelectTask={setStatusSelectTask}
        statusSelectTask={statusSelectTask}
      />

      <RenderTasks
        tasks={tasks}
        statusSelectTask={statusSelectTask}
        handlerRemoveTask={handlerRemoveTask}
        handlerActivateUiElement={handlerActivateUiElement}
        handlerMapEventValue={handlerMapEventValue}
      />
    </div>
  );
});

export default App;
