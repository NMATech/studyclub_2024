import farrel from "../assets/pemateri/Farrel.png";
import rizqi from "../assets/pemateri/Rizqi.png";
import johan from "../assets/pemateri/johan.png";
import hanif from "../assets/pemateri/hanif.png";
import sofian from "../assets/pemateri/Sofian1.png";

import CarouselPemateri from "./carousel/CarouselPemateri";
import { FaInstagram } from "react-icons/fa6";

function Pemateri() {
  const pemateri = [
    {
      foto: farrel,
      nama: "Farrel Paksi Aditya",
      title: "Assistant Lab UNSIKA",
      insta: "https://www.instagram.com/_frladtya03/",
    },
    {
      foto: rizqi,
      nama: "M. Rizqi Fadhilah",
      title: "CC Data Science at Rakamin Academy",
      insta: "https://www.instagram.com/mrfadhillah21/",
    },
    {
      foto: johan,
      nama: "Johan",
      title: "Developer of UniPOS Application",
      insta: "https://www.instagram.com/kyahanz/",
    },
    {
      foto: hanif,
      nama: "Muhammad Hanif",
      title: "Ex. Product Manager at Eduwork",
      insta: "https://www.instagram.com/hmnif_/",
    },
    {
      foto: sofian,
      nama: "Sopian Syauri",
      title: "3rd UI/UX Design in Semantic 8.0",
      insta: "https://www.instagram.com/syr_sopian/",
    },
  ];

  return (
    <div className="text-myBg dark:text-myText p-3 mt-[10px] md:mt-[50px]">
      <h1 className="font-bold text-3xl text-myBg dark:text-myText text-center">
        Meet Our Master
      </h1>
      <p className="mt-3 text-myBg dark:text-myText md:w-[60%] mx-auto md:text-xl text-center">
        Temui para ahli yang akan membimbing Anda di setiap kelas. Dengan
        bimbingan mereka, Anda akan mendapatkan wawasan mendalam dan pengalaman
        praktis yang berharga.
      </p>
      <div className="flex flex-wrap md:hidden mt-[30px]">
        <CarouselPemateri pemateri={pemateri} />
      </div>
      <div className="hidden md:flex flex-wrap justify-center items-center gap-5 mt-[50px]">
        {pemateri.map((x, index) => {
          return (
            <section
              key={index}
              className="transition duration-300 ease-in hover:translate-y-1 min-w-[25%] bg-gradient-to-b from-myPrimary/30 to-myAccent/50 hover:from-myPrimary/50 hover:to-myAccent/80 dark:from-myPrimary/30 dark:to-mySecondary/50 flex flex-col justify-center items-center h-[19em] gap-1 border rounded-xl text-myBg dark:text-myText p-1 shadow-xl shadow-mySecondary/40"
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
                <h1 className="font-bold text-lg text-center">{x.nama}</h1>
                <p className="text-center text-md">{x.title}</p>
              </div>
              <a href={x.insta} target="_blank">
                <div className="transition duration-300 ease-in-out transform hover:translate-y-1 bg-myAccent p-2 rounded-full mt-[10px]">
                  <FaInstagram color="white" size={20} />
                </div>
              </a>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Pemateri;
