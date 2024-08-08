import imageHero from "../assets/img/sc_dokumentasi.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden h-full w-full">
        <motion.img
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          src={imageHero}
          alt=""
          className="h-56 md:h-72 lg:h-[30em] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black h-56 md:h-72 lg:h-[30em] opacity-70 "></div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
          className="absolute inset-0 flex flex-col lg:gap-3 justify-center items-center text-center"
        >
          <h1 className="text-myText md:text-3xl font-bold">
            "Dive Into Technology and Bring a Happiness"
          </h1>
          <p className="w-[80%] lg:w-[60%] text-sm md:text-lg text-white">
            Dengan diambilnya tema ini, diharapkan para peserta dapat
            memperdalam pengetahuan mereka dalam bidang IT mulai dari dasar
            hingga tingkat mahir.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
