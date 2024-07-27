import imageHero from "../assets/img/sc_dokumentasi.jpg";
import Button from "./Button";

function Hero() {
  return (
    <div className="w-full">
      <div className="overflow-hidden">
        <img
          src={imageHero}
          alt=""
          className="h-56 md:h-64 lg:h-80 w-full object-cover"
        />
        <div className="absolute inset-0 bg-black h-56 md:h-64 lg:h-80 opacity-70 top-[67px] md:top-[76px]"></div>
      </div>
      <div className="flex justify-center w-full mx-auto absolute top-[7em] md:top-[10em]">
        <div className="flex flex-col lg:gap-3 justify-center items-center text-center">
          <h1 className="text-white md:text-3xl font-bold">
            "Dive Into Technology and Bring a Happiness"
          </h1>
          <p className="w-[80%] lg:w-[70%] text-sm md:text-lg text-white">
            Dengan diambilnya tema ini, diharapkan para peserta dapat
            memperdalam pengetahuan mereka dalam bidang IT mulai dari dasar
            hingga tingkat mahir.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
