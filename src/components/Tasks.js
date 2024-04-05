import Task from "./Task";

function Tasks({ tasks, onDelete, onToggle }) {
  return (
    <div className="container d-flex flex-column align-items-center">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={() => onToggle(task.id)}
        />
      ))}
    </div>
  );
}

export default Tasks;
