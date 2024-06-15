import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [IsOpenMenu, setisOpenMenu] = useState(false);
  const menuItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Contacts",
    },
    {
      id: 5,
      text: "Blogs",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl h-16 container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between h-16 items-center">
          <div>
            <h2 className="hover:scale-110 duration-300 hover:cursor-pointer hover:text-teal-600 hover:text-2xl">SRC</h2>
          </div>
          {/* desktop views menus  */}
          <div>
            <ul className="hidden md:flex space-x-4">
              {menuItems.map((item, id) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={item.text}
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-64} // Set offset to negative height of navbar
                    duration={500}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div
              onClick={() => setisOpenMenu(!IsOpenMenu)}
              className="md:hidden"
            >
              {IsOpenMenu ? <IoCloseSharp /> : <CiMenuBurger />}
            </div>
          </div>
        </div>

        {/* mobile view menu  */}
        {IsOpenMenu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center gap-2 font-semibold">
              {menuItems.map((item, id) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setisOpenMenu(!IsOpenMenu)}
                    to={item.text}
                    activeClass="active"
                    smooth={true}
                    offset={-64} // Set offset to negative height of navbar
                    duration={500}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
  