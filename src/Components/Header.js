import React from "react";
import { Logo } from "../Utils/Constants";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b flex justify-between from-black w-screen pl-28 z-10">
      <img className="w-44 " alt="logo" src={Logo} />
      <div className="flex pr-16">
        <img alt="" src=""></img>
        <button className="font-bold">Sign out</button>
      </div>
    </div>
  );
};

export default Header;
