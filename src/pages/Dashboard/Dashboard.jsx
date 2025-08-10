import React from "react";
import { FaChartLine } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

const cardDetails = [
  {
    title: "Total Sales",
    value: "$12,345",
    icon: <FaDollarSign />,
    percentageChange: "+5",
  },
  {
    title: "Total Orders",
    value: "1,234",
    icon: <FaShoppingCart />,

    percentageChange: "-2",
  },
  {
    title: "Total Clients",
    value: "567",
    icon: <FaUsers />,

    percentageChange: "+10",
  },
  {
    title: "Total Revenue",
    value: "$45,678",

    icon: <FaChartLine />,

    percentageChange: "+3",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-[#F5F5F5] max-h-screen w-full overflow-y-scroll">
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardDetails.map((card, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-1 border-[#365A4C]/50  bg-white text-gray-600`}
            >
              <div className="flex items-center justify-between">
                <i className={`${card.icon} text-3xl`}>{card.icon}</i>
                <div>
                  <h2 className="text-xl font-semibold">{card.title}</h2>
                  <div className="flex flex-row items-center space-x-2">
                    <p className="text-2xl font-bold">{card.value}</p>
                    <p
                      className={`mt-2 text-sm font-medium  p-1 rounded ${
                        card.percentageChange.startsWith("+")
                          ? "text-green-800 bg-green-300"
                          : "text-red-800 bg-red-300"
                      }`}
                    >
                      {card.percentageChange}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section>
          <div></div>
        </section>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          {/* Add recent activity content here */}
          <p className="text-gray-600">No recent activity to display.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
