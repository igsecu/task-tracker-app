import { useState } from "react";

function AddTask() {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  return (
    <div className="container mb-3 pb-3 d-flex flex-column align-items-center">
      <form className="d-flex flex-column w-75 border-bottom border-secondary-subtle pb-3">
        <div className="mb-2">
          <label htmlFor="task" className="form-label fs-5 fw-semibold">
            Task
          </label>
          <input
            type="text"
            className="form-control border border-dark rounded-0"
            id="task"
            placeholder="Add task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <div className="mb-2">
          <label htmlFor="day" className="form-label fs-5 fw-semibold">
            Day
          </label>
          <input
            type="text"
            className="form-control border border-dark rounded-0"
            id="day"
            placeholder="Add day for the task..."
            value={day}
            onChange={(e) => setDay(e.target.value)}
          ></input>
        </div>
        <div className="mb-2 d-flex flex-row justify-content-between align-items-center">
          <label className="form-label  fs-5 fw-bolder" htmlFor="gridCheck">
            Set reminder
          </label>
          <div className="form-check">
            <input
              className="form-check-input border border-dark rounded-0"
              type="checkbox"
              id="gridCheck"
              placeholder="Set reminder"
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            ></input>
          </div>
        </div>

        <button type="submit" className="btn btn-dark">
          Save Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;
