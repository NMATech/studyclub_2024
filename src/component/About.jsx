import StudyClub from "../assets/logo/StudyClub.png";
import image1 from "../assets/img/sc1.jpg";
import image2 from "../assets/img/sc2.jpg";
import image3 from "../assets/img/sc3.jpg";

import CarouselAbout from "./carousel/CarouselAbout";

function About() {
  const slides = [image1, image2, image3];

  return (
    <div
      className="bg-myBg flex flex-col md:flex-row justify-center items-center text-center gap-3 w-full text-myText p-3 mt-[20px] md:mt-[50px]"
      id="about"
    >
      <div className="md:w-[50%] flex flex-col gap-3">
        <h1 className="font-bold text-3xl md:text-4xl">About</h1>
        <h1 className="md:text-xl md:w-[90%] mx-auto">
          Study Club merupakan ruang yang memberikan kesempatan bagi para
          mahasiswa informatika untuk mempelajari ilmu pengetahuan di bidang IT.
        </h1>
      </div>
      <div className="max-w-lg md:w-[50%] mt-[20px]">
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
      </div>
    </div>
  );
}

export default About;
