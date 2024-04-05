import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      day: "Day 1",
      reminder: true,
    },
    {
      id: 2,
      text: "Task 2",
      day: "Day 2",
      reminder: true,
    },
    {
      id: 3,
      text: "Task 3",
      day: "Day 3",
      reminder: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000);
    setTasks([{ id, ...task }, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, reminder: !t.reminder } : t))
    );
  };

  return (
    <div>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <div className="container d-flex justify-content-center mt-4">
          <h3>"Ups! No tasks to show..."</h3>
        </div>
      )}
    </div>
  );
}

export default App;
