import React, { useState } from "react";
import { uniqueId } from "lodash";

import "./App.css";
import checkTaskOverlap from "../../functions/checkTaskOverlap";
import { ALL_TASKS, BLACK } from "../../constants/constants";

import RenderForm from "../RenderForm/RenderForm";
import RenderTasks from "../RenderTasks/RenderTasks";
import RenderSelectTasks from "../RenderSelectTasks/RenderSelectTasks";

const App = () => {
  const [newTaskText, setNewTaskText] = useState("");
  const [statusSelectTask, setStatusSelectTask] = useState(ALL_TASKS);
  const [tasks, setTasks] = useState([]);

  const handlerClearAll = (e) => {
    e.preventDefault();
    setNewTaskText("");
    setStatusSelectTask(ALL_TASKS);
    setTasks([]);
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

    const newTask = {
      id: uniqueId(),
      text: normalizeNewTaskText,
      isCheckboxActive: false,
      isTaskEdit: false,
      statusTaskColor: BLACK,
    };

    setNewTaskText("");
    setTasks((prevState) => [newTask, ...prevState]);
  };

  const handlerRemoveTask = (id) => {
    setTasks((prevState) => {
      const newTasks = prevState.filter((task) => task.id !== id);
      return newTasks;
    });
  };

  const handlerActivateUiElement = (id, nameKeyTask) => {
    setTasks((prevState) => {
      const newTasks = prevState.map((task) => {
        if (task.id === id) {
          task[nameKeyTask] = !task[nameKeyTask];
        }
        return task;
      });

      return newTasks;
    });
  };

  const handlerMapEventValue = (e, id, nameKeyTask) => {
    setTasks((prevState) => {
      const newValue = e.target.value;

      const newTasks = prevState.map((task) => {
        if (task.id === id) {
          task[nameKeyTask] = newValue;
        }
        return task;
      });

      return newTasks;
    });
  };

  return (
    <div className="container">
      <div className="div-flex">
        <h2>Список задач</h2>

        <div className="button-div">
          <button className="button-danger" onClick={handlerClearAll}>
            Очистить всё
          </button>
        </div>
      </div>

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
};

export default App;
