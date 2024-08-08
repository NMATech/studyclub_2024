import CarouselPemateri from "./carousel/CarouselPemateri";
import { FaInstagram } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import pemateri from "../service/dataPemateri";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

function Pemateri() {
  return (
    <div className="text-myBg dark:text-myText p-3 mt-[10px] md:mt-[50px]">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
      >
        <h1 className="font-bold text-3xl text-myBg dark:text-myText text-center">
          Meet Our Master
        </h1>
        <p className="mt-3 text-myBg dark:text-myText md:w-[60%] mx-auto md:text-xl text-center">
          Temui para ahli yang akan membimbing Anda di setiap kelas. Dengan
          bimbingan mereka, Anda akan mendapatkan wawasan mendalam dan
          pengalaman praktis yang berharga.
        </p>
      </motion.div>
      <div className="hidden md:block">
        <CarouselPemateri pemateri={pemateri} viewSlide={3} />
      </div>
      <div className="block md:hidden">
        <CarouselPemateri pemateri={pemateri} viewSlide={2} />
      </div>
    </div>
  );
}

export default Pemateri;
