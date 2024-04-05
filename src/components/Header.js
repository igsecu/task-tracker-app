import Button from "./Button";

const Header = ({ title, onAdd, showAddTask }) => {
  return (
    <div className="navbar bg-dark navbar-dark mb-5">
      <div className="container">
        <a href="#" className="navbar-brand fw-bold">
          {title}
        </a>

        <Button
          text={`${showAddTask ? "CLOSE" : "ADD TASK"}`}
          onAdd={onAdd}
          showAddTask={showAddTask}
        />
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
