const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      className={`font-semibold cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
