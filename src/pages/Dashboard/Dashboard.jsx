import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
import { FaChartLine } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import Box from "../../Components/Box";
import BarChart from "../../Components/Charts/BarChart";
import DashWrapper from "../../Components/DashWrapper";
import StatsCard from "../../Components/StatsCard";

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

const recentOrders = [
  { id: "#1001", client: "Jane Doe", amount: "$250", status: "Completed" },
  { id: "#1002", client: "John Smith", amount: "$180", status: "Pending" },
  { id: "#1003", client: "Emily Johnson", amount: "$320", status: "Completed" },
];

const recentSales = [
  { id: "S-2001", product: "Sofa", amount: "$500", date: "2025-08-10" },
  { id: "S-2002", product: "Dining Table", amount: "$350", date: "2025-08-09" },
  { id: "S-2003", product: "Chair", amount: "$120", date: "2025-08-08" },
];

const data = {
  labels: ["Pending", "Completed"],
  datasets: [
    {
      label: "Orders",
      data: [12, 19],

      backgroundColor: ["rgba(255, 99, 132, 0.2)", "#8FAEA2"],
      borderColor: ["#FFF", "#FFF"],
      borderWidth: 1,
    },
  ],
};

const Dashboard = () => {
  const [orderStatusFilter, setOrderStatusFilter] = useState("All");
  const [salesProductFilter, setSalesProductFilter] = useState("All");

  const filteredOrders =
    orderStatusFilter === "All"
      ? recentOrders
      : recentOrders.filter((order) => order.status === orderStatusFilter);

  const filteredSales =
    salesProductFilter === "All"
      ? recentSales
      : recentSales.filter((sale) => sale.product === salesProductFilter);

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-semibold";
      case "In progress":
        return "bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold";
      case "Fixed":
        return "bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-semibold";
      case "Completed":
        return "bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold";
      default:
        return "bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-semibold";
    }
  };
  return (
    <DashWrapper>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardDetails.map((card, index) => (
          <StatsCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            percentageChange={card.percentageChange}
          />
        ))}
      </div>

      <section className="mt-8 flex flex-col md:flex-row gap-4">
        <Box>
          <Doughnut data={data} />
        </Box>

        <Box>
          <BarChart />
        </Box>
      </section>

      <div className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {/* Recent Orders Table */}
          <div className="bg-white rounded-lg border border-gray-200 ">
            <div className="flex justify-between items-center p-4 ">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Orders
              </h3>
              <select
                value={orderStatusFilter}
                onChange={(e) => setOrderStatusFilter(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring focus:ring-indigo-200"
              >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="In progress">In progress</option>
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Client
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, idx) => (
                    <tr
                      key={order.id}
                      className={`hover:bg-[#365A4C]/10 ${
                        idx !== filteredOrders.length - 1 ? "" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {order.client}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <span className={getStatusClass(order.status)}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recent Sales Table */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center p-4 ">
              <h3 className="text-lg font-semibold text-gray-800">
                Recent Sales
              </h3>
              <select
                value={salesProductFilter}
                onChange={(e) => setSalesProductFilter(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 text-sm focus:ring focus:ring-indigo-200"
              >
                <option value="All">All</option>
                {[...new Set(recentSales.map((sale) => sale.product))].map(
                  (product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-300">
                  <tr>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Sale ID
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Product
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-sm font-medium text-gray-600">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSales.map((sale, idx) => (
                    <tr
                      key={sale.id}
                      className={`hover:bg-[#365A4C]/10 ${
                        idx !== filteredSales.length - 1 ? "" : ""
                      }`}
                    >
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {sale.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {sale.product}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {sale.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        {sale.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashWrapper>
  );
};

export default Dashboard;
