const Box = ({ children }) => {
  return (
    <div className="md:w-1/2  md:max-h-[400px] bg-white border-1 rounded-2xl p-8 border-gray-300">
      {children}
    </div>
  );
};

export default Box;
