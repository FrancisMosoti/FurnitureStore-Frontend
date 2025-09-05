import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [navigate]);

  return (
    <div className="flex  flex-col justify-center items-center h-screen">
      <CircularProgress className="m-20 " color="success" />
    </div>
  );
};

export default Logout;
