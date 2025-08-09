import { Outlet } from "react-router";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Home;
