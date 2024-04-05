import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="navbar bg-dark mb-3" data-bs-theme="dark">
      <div className="container">
        <h1 className="navbar-brand">{title}</h1>

        <Button text="ADD TASK" />
      </div>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
