import { FaTimes } from "react-icons/fa";

function Task({ task, onDelete, onToggle }) {
  return (
    <div
      className="mb-3 border-bottom border-secondary-subtle w-75"
      onDoubleClick={onToggle}
      style={{ cursor: "pointer" }}
    >
      <div
        className={`${
          task.reminder ? "border-start border-5 border-success ps-2" : ""
        }`}
      >
        <div className="d-flex w-100 justify-content-between align-items-center">
          <h5 className="mb-1">{task.text}</h5>
          <FaTimes
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => onDelete(task.id)}
          />
        </div>
        <p className="mb-1">{task.day}</p>
      </div>
    </div>
  );
}

export default Task;
