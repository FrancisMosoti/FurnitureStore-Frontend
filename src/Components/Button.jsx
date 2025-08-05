const Button = ({ children, onClick, className }) => {
  return (
    <button
      className={`font-semibold p-4 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;
