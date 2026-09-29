function Task({ task, onDelete, onToggle }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span>{task.name}</span>

      <button onClick={() => onDelete(task.id)}>
        Șterge
      </button>
    </div>
  );
}

export default Task;