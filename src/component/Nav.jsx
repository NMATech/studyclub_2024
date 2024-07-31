import React from "react";
import { useState, useEffect } from "react";

// Icon
import { MdMenu, MdClose, MdSunny, MdDarkMode } from "react-icons/md";

// Image
import logo from "../assets/logo/logo_studyclub.png";

function Nav() {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState("light");

  const listMenu = [
    {
      link: "#",
      title: "Home",
    },
    {
      link: "#about",
      title: "About",
    },
    {
      link: "#event",
      title: "Event",
    },
    {
      link: "#timeline",
      title: "Timeline",
    },
  ];

  const handleSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <nav className="flex justify-between items-center bg-myText dark:bg-myBg text-myBg dark:text-white p-3">
        <div className="flex justify-center items-center gap-[10px]">
          <img src={logo} alt="Logo Study Club" className="w-[40px]" />
          <h1 className="text-xl font-bold md:text-2xl">StudyClub</h1>
        </div>
        <div className="flex">
          <ul
            className={`${
              menu ? "block" : "hidden"
            } z-10 md:static absolute md:flex md:items-center md:gap-[20px] top-[55px] right-0 p-3 text-center text-lg bg-myText dark:bg-myBg text-myBg dark:text-myText transition-all delay-200 ease-in`}
          >
            {listMenu.map((menu, index) => (
              <li key={index} className="mb-3 md:mb-0">
                <a
                  href={menu.link}
                  className="hover:border-b-2 hover:border-myAccent dark:hover:border-white"
                >
                  {menu.title}
                </a>
              </li>
            ))}
            <li className="md:hidden">
              <button onClick={handleSwitch}>
                {theme === "dark" ? (
                  <MdDarkMode size={20} />
                ) : (
                  <MdSunny size={20} />
                )}
              </button>
            </li>
          </ul>
          <button className="hidden md:block" onClick={handleSwitch}>
            {theme === "dark" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdSunny size={20} />
            )}
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setMenu(!menu);
          }}
        >
          {menu ? (
            <MdClose className="text-3xl text-myBg dark:text-white" />
          ) : (
            <MdMenu className="text-3xl text-myBg dark:text-white" />
          )}
        </button>
      </nav>
    </>
  );
}

export default Nav;
