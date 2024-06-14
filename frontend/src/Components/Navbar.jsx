import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";

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
      <div className="max-w-screen-2xl h-12 container mx-auto px-4 md:px-20 shadow-md fixed top-0 left-0 right-0 z-50 bg-white ">
        <div className="flex justify-between h-10 items-center">
          <div>
            <h2>Logo</h2>
          </div>
          {/* desktop views menus  */}
          <div>
            <ul className="hidden md:flex space-x-4  ">
              {menuItems.map((item, id) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {item.text}
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
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center gap-2 font-semibold">
              {menuItems.map((item, id) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer "
                  key={id}
                >
                  {item.text}
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
