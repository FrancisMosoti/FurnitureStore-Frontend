import { Outlet } from "react-router";

import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";

const Home = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Home;
