function Task({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span>{task.title}</span>

      <button onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </li>
  );
}

export default Task;