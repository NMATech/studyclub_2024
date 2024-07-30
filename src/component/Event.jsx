import { FaFigma, FaPython } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";

function Event() {
  const events = [
    {
      logo: FaFigma,
      title: "UI/UX Design",
      desc: "Kelas UI/UX mengajarkan prinsip desain antarmuka dan pengalaman pengguna.",
    },
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
  ];

  return (
    <div className="bg-myBg text-white p-3 mt-[10px] md:mt-[50px]">
      <div className="flex flex-col gap-3 mb-3 text-center">
        <h1 className="font-bold text-3xl md:text-4xl">Our Events</h1>
        <p className="md:w-[60%] mx-auto md:text-xl">
          Studyclub menawarkan tiga kelas khusus untuk membantu Anda
          mengembangkan keterampilan dan pengetahuan di bidang informatika.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center mt-[30px] md:mt-[50px]">
        {events.map((event, index) => {
          const Logo = event.logo;
          return (
            <section
              key={index}
              className="bg-gradient-to-b from-mySecondary/10 to-mySecondary/50 hover:from-mySecondary/50 hover:to-myAccent/80 flex flex-col justify-center items-center w-[70%] md:w-[30%] h-[13em] gap-3 border rounded-xl p-3"
            >
              <Logo size={40} />
              <h1 className="text-xl text-center">{event.title}</h1>
              <p className="text-center">{event.desc}</p>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Event;
