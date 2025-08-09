import React from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  return (
    <NavLink
      to="/cart"
      className="text-white font-semibold hover:text-gray-300 flex items-center text-2xl"
    >
      <FiShoppingCart />
    </NavLink>
  );
};

export default Cart;
