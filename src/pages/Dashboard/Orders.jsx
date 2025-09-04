import React, { act } from "react";
import DashWrapper from "../../Components/DashWrapper";
import Table from "../../Components/Table";
import { getStatusClass } from "../../data";
import StatsCard from "../../Components/StatsCard";
import { FaShoppingCart } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import BasicPopover from "../../Components/PopOver";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const cardDetails = [
  {
    title: "Total Orders",
    value: "1,234",
    icon: <FaShoppingCart />,
    percentageChange: "+4.5",
  },
  {
    title: "Total Revenue",
    value: "$45,678",
    icon: <FaDollarSign />,
    percentageChange: "+3.2",
  },
  {
    title: "Total Clients",
    value: "567",
    icon: <FaUsers />,
    percentageChange: "+5.1",
  },
  {
    title: "Total Sales",
    value: "$12,345",
    icon: <FaChartLine />,
    percentageChange: "-1.2",
  },
];

const data = [
  { id: "#1001", client: "Jane Doe", amount: "$250", status: "Completed" },
  { id: "#1002", client: "John Smith", amount: "$180", status: "Pending" },
  { id: "#1003", client: "Emily Johnson", amount: "$320", status: "Completed" },
  {
    id: "#1004",
    client: "Michael Brown",
    amount: "$150",
    status: "In progress",
  },
  { id: "#1005", client: "Sarah Davis", amount: "$400", status: "Completed" },
  { id: "#1006", client: "David Wilson", amount: "$220", status: "Pending" },
  { id: "#1007", client: "Laura Garcia", amount: "$330", status: "Completed" },
  {
    id: "#1008",
    client: "James Martinez",
    amount: "$280",
    status: "In progress",
  },
  {
    id: "#1009",
    client: "Linda Rodriguez",
    amount: "$360",
    status: "Completed",
  },
  {
    id: "#1010",
    client: "Robert Hernandez",
    amount: "$190",
    status: "Pending",
  },
];

const menuItems = [
  // { label: "View", action: () => alert("View Details clicked") },
  // { label: "Edit", action: () => alert("Edit Order clicked") },
  { label: "Completed", action: () => alert("Marked as Completed") },
  { label: "In Progress", action: () => alert("Marked In Progress") },
  // { label: "Delete", action: () => alert("Delete Order clicked") },
];

const columns = [
  { header: "Order ID", accessor: "id" },
  {
    header: "Status",
    accessor: "status",
    render: (status) => (
      <span className={getStatusClass(status)}>{status}</span>
    ),
  },
  { header: "Client", accessor: "client" },
  { header: "Amount", accessor: "amount" },
  {
    actor: "actions",
    header: "Actions",
    accessor: "actions",
    render: () => (
      <span className="flex items-center gap-4">
        <BasicPopover menuItems={menuItems} />
        <FaEdit className="text-gray-600 hover:text-gray-800 cursor-pointer text-2xl" />
        <MdDeleteForever className="text-red-500 hover:text-red-800 cursor-pointer text-2xl" />
      </span>
    ),
  },
];

const Orders = () => {
  return (
    <DashWrapper>
      <h1 className="text-2xl font-bold mb-4">Orders Page</h1>
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
      <Table columns={columns} data={data} rowsPerPage={10} />
    </DashWrapper>
  );
};

export default Orders;
