import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex items-center justify-center bg-blue-500 p-4">
      <AiOutlineCheck className="text-white text-2xl mr-2" />
      <h1 className="text-white text-2xl">My Todo-s</h1>
    </header>
  );
};

export default Header;
