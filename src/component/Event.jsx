import { FaFigma, FaPython } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";
import { motion } from "framer-motion";

function Event() {
  const events = [
    {
      logo: FaPython,
      title: "Data Science",
      desc: "Kelas Data Science memperkenalkan dasar-dasar analisis data dan machine learning.",
    },
    {
      logo: RiFlutterFill,
      title: "Mobile Programming",
      desc: "Kelas Mobile Programming mencakup dasar-dasar pengembangan aplikasi mobile.",
    },
    {
      logo: FaFigma,
      title: "UI/UX Design",
      desc: "Kelas UI/UX mengajarkan prinsip desain antarmuka dan pengalaman pengguna.",
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
    <div
      className="text-myBg dark:text-myText p-3 mt-[10px] md:mt-[50px]"
      id="event"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
        className="flex flex-col gap-3 mb-3 text-center"
      >
        <h1 className="font-bold text-myBg dark:text-myText text-3xl md:text-4xl">
          Our Events
        </h1>
        <p className="md:w-[60%] mx-auto md:text-xl">
          Studyclub menawarkan tiga kelas khusus untuk membantu Anda
          mengembangkan keterampilan dan pengetahuan di bidang informatika.
        </p>
      </motion.div>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-[30px] md:mt-[50px]">
        {events.map((event, index) => {
          const Logo = event.logo;
          return (
            <motion.section
              variants={fadeInAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              custom={index}
              key={index}
              className="transition duration-300 ease-in hover:translate-y-1 shadow-xl shadow-mySecondary/40 bg-gradient-to-b from-myPrimary/30 to-myAccent/50 hover:from-myPrimary/50 hover:to-myAccent/80 dark:from-myPrimary/30 dark:to-mySecondary/50 dark:hover:from-myPrimary/50 dark:hover:to-myAccent/80 flex flex-col justify-center items-center w-[70%] md:w-[30%] h-[13em] gap-3 border rounded-xl p-3"
            >
              <Logo size={40} />
              <h1 className="text-xl text-center">{event.title}</h1>
              <p className="text-center">{event.desc}</p>
            </motion.section>
          );
        })}
      </div>
    </div>
  );
}

export default Event;
