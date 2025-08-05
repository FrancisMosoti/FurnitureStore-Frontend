import { Outlet } from "react-router";
import { HomePage } from "../App";
import Navbar from "../Sections/Navbar";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <Outlet />
    </div>
  );
};
export default Home;
