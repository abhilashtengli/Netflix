import React from "react";
import { Logo } from "../Utils/Constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 ml-32 z-10">
      <img className="w-44 " alt="" src={Logo} />
    </div>
  );
};

export default Header;
