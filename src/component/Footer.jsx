import { FaFigma, FaPython } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Footer() {
  const kelas = [FaPython, RiFlutterFill, FaFigma];
  const footlink = [
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

  const fadeInAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
      },
    }),
  };

  return (
    <footer className="bg-myText dark:bg-myBg border-t-2 border-myBg mt-[30px] p-2 rounded-3xl">
      <div className="flex flex-col justify-center items-center p-2">
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-myBg dark:text-myText"
        >
          Studyclub
        </motion.h1>
        <div className="w-full flex gap-3 justify-center items-center mt-[10px]">
          {kelas.map((X) => {
            return (
              <motion.div
                variants={fadeInAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="transition duration-300 ease-in transform hover:translate-y-1 bg-myAccent/70 flex justify-center items-center p-1 rounded-full"
              >
                <X color="white" size={25} />
              </motion.div>
            );
          })}
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring", delay: 1 }}
          className="w-max md:w-[80%] mx-auto border-t border-myBg dark:border-myText mt-[20px]"
        >
          <ul className="flex justify-center items-center gap-2 md:gap-10 mt-[20px]">
            {footlink.map((link) => {
              return (
                <li className="transition duration-300 ease-in transform hover:translate-y-1 text-myBg dark:text-myText text-xl md:text-2xl hover:text-myAccent">
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
          <div className="text-myBg dark:text-myText text-center mt-[20px]">
            <p>Terms & Conditions Privacy Policy</p>
            <p>Copyright 2024 All Rights By Himtika</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
