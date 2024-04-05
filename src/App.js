import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div>
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <div className="container d-flex justify-content-center mt-4">
          <h3>"Ups! No tasks to show..."</h3>
        </div>
      )}
    </div>
  );
}

export default App;
