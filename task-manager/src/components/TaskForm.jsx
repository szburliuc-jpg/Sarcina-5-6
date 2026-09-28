import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.trim() === "") {
      return;
    }

    onAddTask(taskName);
    setTaskName("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Introdu denumirea sarcinii"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
      />

      <button type="submit">Adaugă</button>
    </form>
  );
}

export default TaskForm;