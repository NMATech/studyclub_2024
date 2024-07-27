import imageHero from "../assets/img/sc_dokumentasi.jpg";
import Button from "./Button";

function Hero() {
  return (
    <div className="">
      <div className="h-56 overflow-hidden">
        <img src={imageHero} alt="" className="h-56 w-full object-cover" />
        <div className="absolute inset-0 bg-black h-56 opacity-70 top-[67px]"></div>
      </div>
      <div className="container mx-auto absolute top-[7em]">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-white text-lg font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, molestiae?
          </h1>
          <p className="w-[80%] text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
            nesciunt?
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
