import Button from "./Button";

const Header = ({ title }) => {
  return (
    <div className="navbar navbar-expand-lg bg-dark navbar-dark">
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
