import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { cart } = useCart();

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">E-Commerce Store</h1>
      <nav>
        <Link to="/" className="mr-4">
          Products
        </Link>
        <Link to="/cart" className="relative">
          Cart
          <span className="absolute -top-2 -right-4 bg-red-500 text-white rounded-full w-6 h-6 text-center text-sm">
            {cart.length}
          </span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
