import { useState, useEffect } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

function CarouselAbout({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 5000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="relative overflow-hidden w-full h-full">
      <div
        className="flex transition-transform ease-in duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-2">
        <button onClick={prev} className="bg-myPrimary rounded-full">
          <FaAngleLeft size={30} color="black" />
        </button>
        <button onClick={next} className="bg-myPrimary rounded-full">
          <FaAngleRight size={30} color="black" />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-3 h-3 bg-myPrimary rounded-full ${
                curr === i ? "p-2" : "bg-opacity-70"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarouselAbout;
