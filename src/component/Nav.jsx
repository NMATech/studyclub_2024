import React from "react";
import { useState } from "react";

// Icon
import { MdMenu, MdClose } from "react-icons/md";

// Image
import logo from "../assets/logo/logo_studyclub.png";

function Nav() {
  const [menu, setMenu] = useState(false);
  const listMenu = [
    {
      link: "#",
      title: "Home",
    },
    {
      link: "#",
      title: "About",
    },
    {
      link: "#",
      title: "Event",
    },
    {
      link: "#",
      title: "Timeline",
    },
  ];

  return (
    <>
      <nav className="flex justify-between items-center bg-blueSc-500 text-white p-3">
        <div className="flex justify-center items-center gap-[10px]">
          <img src={logo} alt="Logo Study Club" className="w-[40px]" />
          <h1 className="text-xl md:text-2xl">StudyClub</h1>
        </div>
        <div className="flex">
          <ul
            className={`${
              menu ? "block" : "hidden"
            } md:static absolute md:flex md:items-center md:gap-[20px] top-[55px] right-0 bg-blueSc-500 p-3 text-center text-lg transition-all delay-200 ease-in`}
          >
            {listMenu.map((menu, index) => (
              <li key={index} className="mb-3 md:mb-0">
                <a href="" className="hover:border-b-2 hover:border-white">
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <MdClose className="text-3xl text-white" />
          ) : (
            <MdMenu className="text-3xl text-white" />
          )}
        </button>
      </nav>
    </>
  );
}

export default Nav;
