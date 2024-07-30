import imageHero from "../assets/img/sc_dokumentasi.jpg";

function Hero() {
  return (
    <div className="w-full">
      <div className="relative overflow-hidden h-full w-full">
        <img
          src={imageHero}
          alt=""
          className="h-56 md:h-72 lg:h-[30em] w-full object-cover"
        />
        <div className="absolute inset-0 bg-black h-56 md:h-72 lg:h-[30em] opacity-70 "></div>
        <div className="absolute inset-0 flex flex-col lg:gap-3 justify-center items-center text-center">
          <h1 className="text-myText md:text-3xl font-bold">
            "Dive Into Technology and Bring a Happiness"
          </h1>
          <p className="w-[80%] lg:w-[60%] text-sm md:text-lg text-white">
            Dengan diambilnya tema ini, diharapkan para peserta dapat
            memperdalam pengetahuan mereka dalam bidang IT mulai dari dasar
            hingga tingkat mahir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
