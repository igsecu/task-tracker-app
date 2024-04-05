function Tasks({ tasks }) {
  return (
    <div className="container">
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </div>
  );
}

export default Tasks;
