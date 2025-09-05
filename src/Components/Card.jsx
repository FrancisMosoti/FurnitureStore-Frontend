import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`p-6 rounded-lg  border-2 border-gray-200 ${className}`}>
      {children}
    </div>
  );
};
export default Card;
