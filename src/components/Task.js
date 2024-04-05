import { FaTimes } from "react-icons/fa";

function Task({ task }) {
  return (
    <div className="mb-3 border-bottom border-secondary-subtle w-75">
      <div className="d-flex w-100 justify-content-between align-items-center">
        <h5 className="mb-1">{task.text}</h5>
        <FaTimes style={{ cursor: "pointer", color: "red" }} />
      </div>
      <p className="mb-1">{task.day}</p>
    </div>
  );
}

export default Task;
