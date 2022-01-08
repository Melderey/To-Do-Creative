import { uniqueId } from "lodash";
import checkTaskOverlap from "../../../functions/checkTaskOverlap";

function handleSubmitForm(e) {
  e.preventDefault();
  const { tasks, newTaskText } = this.state;
  const normalizeNewTaskText = newTaskText.trim();
  if (normalizeNewTaskText.length === 0) {
    return alert("Ввведиет новую задачу!");
  }
  if (checkTaskOverlap(tasks, normalizeNewTaskText)) {
    return alert("Такая задача уже существует, введиет новую задачу!");
  }
  const newTask = {
    id: uniqueId(),
    text: normalizeNewTaskText,
    checkboxActive: false,
    isTaskEdit: false,
    statusTaskColor: "black",
  };
  this.setState(() => ({ newTaskText: "", tasks: [newTask, ...tasks] }));
}

export default handleSubmitForm;
