import StudyClub from "../assets/logo/StudyClub.png";
import image1 from "../assets/img/sc1.jpg";
import image2 from "../assets/img/sc2.jpg";
import image3 from "../assets/img/sc3.jpg";

import CarouselAbout from "./carousel/CarouselAbout";
import { motion } from "framer-motion";

function About() {
  const slides = [image1, image2, image3];

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center text-center gap-3 w-full text-myBg dark:text-myText p-3 mt-[20px] md:mt-[50px]"
      id="about"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 200 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
        viewport={{ once: true }}
        className="md:w-[50%] flex flex-col gap-3 animate-fade-up animate-delay-500"
      >
        <h1 className="font-bold text-myBg dark:text-myText text-3xl md:text-4xl">
          About
        </h1>
        <h1 className="md:text-xl md:w-[90%] mx-auto">
          Study Club merupakan ruang yang memberikan kesempatan bagi para
          mahasiswa informatika untuk mempelajari ilmu pengetahuan di bidang IT.
        </h1>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 200 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-lg md:w-[50%] mt-[20px]"
      >
        <CarouselAbout autoSlide={true}>
          {slides.map((s) => {
            return (
              <img
                src={s}
                alt=""
                className="w-full h-auto object-cover rounded-2xl"
              />
            );
          })}
        </CarouselAbout>
      </motion.div>
    </div>
  );
}

export default About;
