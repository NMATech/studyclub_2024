import farrel from "../assets/pemateri/Farrel.png";
import rizqi from "../assets/pemateri/Rizqi.png";
import johan from "../assets/pemateri/johan.png";
import hanif from "../assets/pemateri/hanif.png";
import sofian from "../assets/pemateri/Sofian1.png";

import CarouselPemateri from "./carousel/CarouselPemateri";

function Pemateri() {
  const pemateri = [
    {
      foto: farrel,
      nama: "Farrel Paksi Aditya",
      title: "Assistant Lab UNSIKA",
    },
    {
      foto: rizqi,
      nama: "Muhammad Rizqi Fadhilah",
      title: "CC Data Science at Rakamin Academy",
    },
    {
      foto: johan,
      nama: "Johan",
      title: "Developer of UniPOS Application",
    },
    {
      foto: hanif,
      nama: "Muhammad Hanif",
      title: "Ex. Product Manager at Eduwork",
    },
    {
      foto: sofian,
      nama: "Sopian Syauri",
      title: "3rd UI/UX Design in Semantic 8.0",
    },
  ];

  return (
    <div className="bg-myBg p-3 mt-[10px] md:mt-[50px]">
      <h1 className="font-bold text-3xl text-myText text-center">
        Meet Our Teacher
      </h1>
      <p className="mt-3 text-myText md:w-[60%] mx-auto md:text-xl text-center">
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
              className="min-w-[25%] bg-gradient-to-b from-mySecondary/10 to-mySecondary/50 hover:from-mySecondary/50 hover:to-myAccent/80 flex flex-col justify-center items-center h-[17em] gap-3 border rounded-xl text-myText p-1"
            >
              <img
                src={x.foto}
                alt={x.nama}
                className={
                  x.nama === "Muhammad Rizqi Fadhilah"
                    ? "w-[200px]"
                    : x.nama === "Johan"
                    ? "w-[200px]"
                    : "w-[130px]"
                }
              />
              <div>
                <h1 className="font-bold text-lg text-center">{x.nama}</h1>
                <p className="text-center text-md">{x.title}</p>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Pemateri;
