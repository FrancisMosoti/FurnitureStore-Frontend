import { Hero } from "../../App";
import Navbar from "../../Sections/Navbar";
import { Outlet } from "react-router-dom";
import Overview from "../../Sections/Overview";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Overview />
    </>
  );
};

export default HomePage;
