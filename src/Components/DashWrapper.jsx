const DashWrapper = ({ children }) => {
  return (
    <div className="bg-[#F5F5F5] max-h-screen w-full overflow-y-scroll pt-16">
      <div className="p-6">{children}</div>
    </div>
  );
};

export default DashWrapper;
