import Navbar from "../../Sections/Navbar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default HomePage;
