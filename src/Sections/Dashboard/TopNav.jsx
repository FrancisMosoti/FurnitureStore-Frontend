import { CgProfile } from "react-icons/cg";

const TopNav = () => {
  return (
    <div className="w-full bg-gray-50 flex  justify-between items-center p-3 mt-2">
      <h1 className="text-2xl font-bold mb-4">Hello, Welcome back!</h1>
      <p className="mb-4 font-medium text-gray-700 flex gap-2 items-center justify-center">
        <span>
          <CgProfile className="text-2xl text-[#365A4C]" />
        </span>
        Frank Mosoti
      </p>
      {/* Add more dashboard content here */}
    </div>
  );
};

export default TopNav;
