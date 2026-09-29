import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Preluarea task-urilor din API
  const fetchTasks = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!response.ok) {
        throw new Error("Eroare la preluarea datelor din API.");
      }

      const data = await response.json();

      // map() - prelucrăm datele primite de la API
      const formattedTasks = data.map((task) => ({
        id: task.id,
        name: task.title,
        completed: task.completed,
      }));

      setTasks(formattedTasks);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Apelăm API-ul la încărcarea aplicației
  useEffect(() => {
    fetchTasks();
  }, []);

  // Adăugarea unui task nou
  const addTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Ștergerea unui task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Schimbarea statusului task-ului
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // filter() - selectăm doar task-urile active
  const activeTasks = tasks.filter((task) => !task.completed);

  // filter() - selectăm task-urile finalizate
  const completedTasks = tasks.filter((task) => task.completed);

  // sort() - sortăm task-urile alfabetic
  const sortedTasks = [...tasks].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <main className="app">
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <div className="statistics">
        <p>Total: {tasks.length}</p>
        <p>Active: {activeTasks.length}</p>
        <p>Finalizate: {completedTasks.length}</p>
      </div>

      {loading && <p className="loading">Se încarcă task-urile...</p>}

      {error && (
        <div className="error">
          <p>{error}</p>
          <button onClick={fetchTasks}>Încearcă din nou</button>
        </div>
      )}

      {!loading && !error && (
        <section className="task-list">
          {sortedTasks.length === 0 ? (
            <p>Nu există task-uri.</p>
          ) : (
            sortedTasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onDelete={deleteTask}
                onToggle={toggleTask}
              />
            ))
          )}
        </section>
      )}
    </main>
  );
}

export default App;