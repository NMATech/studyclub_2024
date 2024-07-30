import { useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function CarouselPemateri({ pemateri }) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? pemateri.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === pemateri.length - 3 ? 0 : curr + 1));
  };

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className="flex gap-3 transition-transform ease-in duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {pemateri.map((x, index) => {
          return (
            <section
              key={index}
              className="min-w-[47%] bg-gradient-to-b from-mySecondary/10 to-mySecondary/50 hover:from-mySecondary/50 hover:to-myAccent/80 flex flex-col justify-center items-center h-[17em] gap-3 border rounded-xl text-myText p-1"
            >
              <img
                src={x.foto}
                alt={x.nama}
                className={
                  x.nama === "Muhammad Rizqi Fadhilah"
                    ? "w-[200px]"
                    : x.nama === "Johan"
                    ? "w-[250px]"
                    : "w-[110px]"
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
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button onClick={prev} className="bg-white rounded-full">
          <FaAngleLeft size={30} color="black" />
        </button>
        <button onClick={next} className="bg-white rounded-full">
          <FaAngleRight size={30} color="black" />
        </button>
      </div>
    </div>
  );
}

export default CarouselPemateri;
