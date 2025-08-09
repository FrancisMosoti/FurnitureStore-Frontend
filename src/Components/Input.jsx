const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#365A4C] ${className}`}
    />
  );
};

export default Input;
