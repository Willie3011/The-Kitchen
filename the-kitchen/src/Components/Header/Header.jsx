import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    // Header
    <div className="bg-white h-16 w-screen shadow-sm p-4 px-2 md:px-8 flex items-center justify-between">
      <div className="md:text-2xl font-bold text-red-500 text-xl">
        <span className="text-black">The</span> Kitchen
      </div>
      <div className="hidden md:flex">
        <ul className="gap-2 items-center hidden md:flex">
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-2 font-semibold" to="/">
              Home
            </NavLink>
          </li>
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-2 font-semibold" to="/menu">
              Menu
            </NavLink>
          </li>
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-2 font-semibold" to="/about">
              About
            </NavLink>
          </li>
          <li className="px-2 py-3 rounded-xl transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-2 font-semibold" to="/orders">
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
      <div
        className={
          openMenu === true
            ? "flex shadow-sm md:hidden h-max w-screen absolute top-16 left-0 -right-2 bg-white z-50"
            : "top-0 hidden"
        }>
        <ul className="">
          <li
            onClick={handleMenu}
            className="h-14 w-screen flex items-center justify-center rounded-sm transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-1 font-semibold" to="/">
              Home
            </NavLink>
          </li>
          <li
            onClick={handleMenu}
            className="h-14 w-screen flex items-center justify-center rounded-sm transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-1 font-semibold" to="/menu">
              Menu
            </NavLink>
          </li>
          <li
            onClick={handleMenu}
            className="h-14 w-screen flex items-center justify-center rounded-sm transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-1 font-semibold" to="/about">
              About
            </NavLink>
          </li>
          <li
            onClick={handleMenu}
            className="h-14 w-screen flex items-center justify-center rounded-sm transition ease-in-out duration-100 hover:bg-yellow-400 hover:text-white">
            <NavLink className="p-1 font-semibold" to="/orders">
              Orders
            </NavLink>
          </li>
          <li
            onClick={handleMenu}
            className="px-2 h-14 w-screen flex items-center justify-center rounded-sm transition ease-in-out duration-100">
            <button  className="bg-yellow-400 px-4 py-2 rounded-sm h-10 w-full text-sm font-semibold text-white transition ease-in-out duration-300 hover:opacity-80">
              <Link to="/signup">Sign up</Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-3 md:gap-5">
        <button className="border border-yellow-400 px-4 py-2 rounded-3xl w-max text-sm font-semibold text-yellow-400 transition ease-in-out duration-300 hover:bg-yellow-400 hover:text-white hidden md:flex">
        <Link to="/signup">Sign up</Link>
        </button>
        <button className="text-lg md:text-2xl">
          <MdOutlineShoppingBag />
        </button>

        <button
          onClick={() => handleMenu()}
          className="text-lg mr-3 block md:hidden ">
          <RiMenu3Line />
        </button>
      </div>
    </div>
  );
}

export default Header;
