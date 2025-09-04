import DashWrapper from "../../Components/DashWrapper";
import StatsCard from "../../Components/StatsCard";
import { FaUsers } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { MdAirplanemodeInactive } from "react-icons/md";
import Input from "../../Components/Input";
import { FaSearch } from "react-icons/fa";
import Table from "../../Components/Table";
import { getStatusClass } from "../../data";

const cardDetails = [
  {
    title: "Total Clients",
    value: "1,200",
    icon: <FaUsers />,
    percentageChange: "+5.4",
  },
  {
    title: "New Clients",
    value: "150",
    icon: <FaUserPlus />,
    percentageChange: "-12.0",
  },
  {
    title: "Active Clients",
    value: "1,050",
    icon: <MdAirplanemodeActive />,
    percentageChange: "+3.2",
  },
  {
    title: "Inactive Clients",
    value: "150",
    icon: <MdAirplanemodeInactive />,
    percentageChange: "-1.5",
  },
];

const data = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+254 712 345 678",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    phone: "+254 713 456 789",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@gmail.com",
    phone: "+254 714 567 890",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    email: "bob.brown@gmail.com",
    phone: "+254 715 678 901",
    status: "Active",
  },
  {
    id: 5,
    name: "Michael Kamau",
    email: "michael.kamau@gmail.com",
    phone: "+254 716 789 012",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Grace Wanjiku",
    email: "grace.wanjiku@gmail.com",
    phone: "+254 717 890 123",
    status: "Active",
  },
  {
    id: 7,
    name: "David Otieno",
    email: "david.otieno@gmail.com",
    phone: "+254 718 901 234",
    status: "Inactive",
  },
  {
    id: 8,
    name: "Mary Achieng",
    email: "mary.achieng@gmail.com",
    phone: "+254 719 012 345",
    status: "Active",
  },
  {
    id: 9,
    name: "Peter Njoroge",
    email: "peter.njoroge@gmail.com",
    phone: "+254 720 123 456",
    status: "Active",
  },
  {
    id: 10,
    name: "Ann Wambui",
    email: "ann.wambui@gmail.com",
    phone: "+254 721 234 567",
    status: "Inactive",
  },
  {
    id: 11,
    name: "Joseph Mwangi",
    email: "joseph.mwangi@gmail.com",
    phone: "+254 722 345 678",
    status: "Active",
  },
  {
    id: 12,
    name: "Lucy Nduta",
    email: "lucy.nduta@gmail.com",
    phone: "+254 723 456 789",
    status: "Active",
  },
  {
    id: 13,
    name: "Samuel Kiptoo",
    email: "samuel.kiptoo@gmail.com",
    phone: "+254 724 567 890",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Naomi Chebet",
    email: "naomi.chebet@gmail.com",
    phone: "+254 725 678 901",
    status: "Active",
  },
  {
    id: 15,
    name: "Daniel Kariuki",
    email: "daniel.kariuki@gmail.com",
    phone: "+254 726 789 012",
    status: "Inactive",
  },
  {
    id: 16,
    name: "Esther Njeri",
    email: "esther.njeri@gmail.com",
    phone: "+254 727 890 123",
    status: "Active",
  },
  {
    id: 17,
    name: "James Onyango",
    email: "james.onyango@gmail.com",
    phone: "+254 728 901 234",
    status: "Active",
  },
  {
    id: 18,
    name: "Sarah Atieno",
    email: "sarah.atieno@gmail.com",
    phone: "+254 729 012 345",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Paul Mworia",
    email: "paul.mworia@gmail.com",
    phone: "+254 730 123 456",
    status: "Active",
  },
  {
    id: 20,
    name: "Cynthia Wairimu",
    email: "cynthia.wairimu@gmail.com",
    phone: "+254 731 234 567",
    status: "Inactive",
  },
];

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Phone", accessor: "phone" },
  {
    header: "Status",
    accessor: "status",
    render: (value) => <span className={getStatusClass(value)}>{value}</span>,
  },
  //   {
  //     header: "Actions",
  //     accessor: "actions",
  //     render: (value, row) => (
  //       <button className="bg-blue-600  p-1 rounded-sm text-white hover:bg-blue-700">
  //         View
  //       </button>
  //     ),
  //   },
];

const Clients = () => {
  return (
    <DashWrapper>
      <h1 className="text-3xl font-bold mb-6">Clients</h1>
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
      <div className=" mt-6 flex justify-end">
        <span className="relative ">
          <Input
            type="text"
            placeholder="Search by Phone Number"
            className="pl-10 pr-4 py-2 "
          />
          <FaSearch className="text-2xl absolute top-2 left-2" />
        </span>
      </div>
      <Table columns={columns} data={data} rowsPerPage={10} />
    </DashWrapper>
  );
};

export default Clients;
