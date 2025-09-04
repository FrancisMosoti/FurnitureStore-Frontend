import DashWrapper from "../../Components/DashWrapper";
import StatsCard from "../../Components/StatsCard";
import { FaUsers } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa";
import { MdAirplanemodeActive } from "react-icons/md";
import { MdAirplanemodeInactive } from "react-icons/md";

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
    </DashWrapper>
  );
};

export default Clients;
