import { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function CarouselPemateri({ pemateri, viewSlide }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 1, type: "spring" }}
    >
      <Swiper
        slidesPerView={viewSlide}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mt-[10px] md:mt-[50px]"
      >
        {pemateri.map((x, index) => {
          return (
            <SwiperSlide
              className="bg-gradient-to-b shadow-mySecondary/40 from-myPrimary/30 to-myAccent/50 hover:from-myPrimary/50 hover:to-myAccent/80 dark:from-myPrimary/30 dark:to-mySecondary/50 dark:hover:from-myPrimary/50 dark:hover:to-myAccent/80 flex flex-col justify-center items-center h-[19em] gap-1 border rounded-xl text-myText p-1 relative"
              key={index}
            >
              <img
                src={x.foto}
                alt={x.nama}
                className={
                  x.nama === "M. Rizqi Fadhilah"
                    ? "w-[180px]"
                    : x.nama === "Johan"
                    ? "w-[200px]"
                    : "w-[130px]"
                }
              />
              <div>
                <h1 className="font-bold text-md md:text-lg text-center">
                  {x.nama}
                </h1>
                <p className="text-center text-sm md:text-md">{x.title}</p>
              </div>
              <motion.a
                whileHover={{ scaleX: 1.1 }}
                href={x.insta}
                target="_blank"
              >
                <div className="transition duration-300 ease-in-out transform hover:translate-y-1 bg-myAccent p-2 rounded-full mt-[10px]">
                  <FaInstagram color="white" size={20} />
                </div>
              </motion.a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}

export default CarouselPemateri;
