import { CgProfile } from "react-icons/cg";

const TopNav = () => {
  return (
    <div className="w-full fixed bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg flex flex-col sm:flex-row justify-between items-start sm:items-center p-3  gap-2 pl-16 md:pl-3">
      {/* Greeting */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 drop-shadow-sm">
        Hello, Welcome back!
      </h1>

      {/* Profile */}
      <p className="font-medium text-gray-800 flex gap-2 items-center drop-shadow-sm">
        <CgProfile className="text-2xl text-[#365A4C]" />
        <span className="text-sm sm:text-base">Frank Mosoti</span>
      </p>
    </div>
  );
};

export default TopNav;
