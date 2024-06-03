import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

function Header() {
  return (
    // Header
    <div className="bg-white h-16 w-screen shadow-sm p-4 flex items-center justify-between">
      <div className="text-2xl font-bold text-red-500"><span className="text-black">The</span> Kitchen</div>
      <div className="navlist">
        <ul className="flex gap-2 items-center">
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className='p-2 font-semibold' to="/">Home</NavLink>
          </li>
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className='p-2 font-semibold' to="/menu">Menu</NavLink>
          </li>
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className='p-2 font-semibold' to="/about">About</NavLink>
          </li>
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className='p-2 font-semibold' to="/orders">Orders</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-2xl">
          <MdOutlineShoppingBag/>
        </button>
        <button className="bg-yellow-400 px-4 py-2 rounded-md h-10 w-max text-sm font-semibold text-white transition ease-in-out duration-300 hover:opacity-80">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
