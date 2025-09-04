import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AiFillPlusCircle } from "react-icons/ai";

export default function BasicPopover({ menuItems }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <button
        aria-describedby={id}
        // variant="contained"
        onClick={handleClick}
        className="text-gray-600 hover:text-gray-800 flex items-center justify-center cursor-pointer"
      >
        <AiFillPlusCircle className="text-xl " />
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        className="p-1"
      >
        {menuItems.map((item, index) => (
          <Typography
            key={index}
            onClick={() => {
              item.action();
              handleClose();
            }}
            className=" p-2 hover:bg-gray-200 cursor-pointer font-medium text-medium"
          >
            {item.label}
          </Typography>
        ))}
      </Popover>
    </div>
  );
}
