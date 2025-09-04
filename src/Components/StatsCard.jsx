import React from "react";

const StatsCard = ({ title, value, icon, percentageChange }) => {
  return (
    <div
      className={` p-6 md:p-4 rounded-lg border-1 border-[#365A4C]/50  bg-white text-gray-600`}
    >
      <div className="flex items-center md:justify-between gap-16 md:gap-0">
        <i className={`${icon} text-3xl`}>{icon}</i>
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <div className="flex flex-row items-center space-x-2">
            <p className="text-2xl font-bold">{value}</p>
            <p
              className={`mt-2 text-sm font-medium  p-1 rounded ${
                percentageChange.startsWith("+")
                  ? "text-green-800 bg-green-300"
                  : "text-red-800 bg-red-300"
              }`}
            >
              {percentageChange}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StatsCard;
