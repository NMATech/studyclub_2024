import { FaInstagram } from "react-icons/fa6";

import { motion } from "framer-motion";

function Sosmed() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, type: "spring", delay: 0.5 }}
      className="w-[80%] md:w-[50%] mx-auto bg-gradient-to-b from-myPrimary/30 to-myAccent/50 flex flex-col justify-center items-center rounded-2xl p-3 m-3"
    >
      <h1 className="font-bold text-2xl text-myBg dark:text-myText">
        Follow Our Instagram
      </h1>
      <a href="https://www.instagram.com/studyclub_id/" target="_blank">
        <div className="transition duration-300 ease-in-out transform hover:translate-y-1 bg-myAccent p-2 rounded-full mt-[10px]">
          <FaInstagram color="white" size={30} />
        </div>
      </a>
    </motion.div>
  );
}

export default Sosmed;
