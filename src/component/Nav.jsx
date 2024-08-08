import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
    exit: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

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
          <motion.img
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            src={logo}
            alt="Logo Study Club"
            className="w-[40px]"
          />
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-xl font-bold md:text-2xl"
          >
            StudyClub
          </motion.h1>
        </div>
        <div className="flex">
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`${
              menu ? "block" : "hidden"
            } z-10 md:static absolute md:flex md:items-center md:gap-[20px] top-[55px] right-0 p-3 text-center text-lg bg-myText dark:bg-myBg text-myBg dark:text-myText transition-all delay-200 ease-in`}
          >
            {listMenu.map((menu, index) => (
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                key={index}
                className="mb-3 md:mb-0"
              >
                <a
                  href={menu.link}
                  className="hover:border-b-2 hover:border-myAccent dark:hover:border-white"
                >
                  {menu.title}
                </a>
              </motion.li>
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
          </motion.ul>
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
