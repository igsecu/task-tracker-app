const Alert = ({ text }) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show py-2"
      role="alert"
    >
      {text}
    </div>
  );
};

export default Alert;
