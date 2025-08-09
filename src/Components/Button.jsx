const Button = ({ children, onClick, className, type }) => {
  return (
    <button
      className={`font-semibold p-4 cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
