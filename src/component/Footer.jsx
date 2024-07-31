import { FaFigma, FaPython } from "react-icons/fa6";
import { RiFlutterFill } from "react-icons/ri";

function Footer() {
  const kelas = [FaPython, RiFlutterFill, FaFigma];
  const footlink = [
    {
      link: "#",
      title: "Home",
    },
    {
      link: "#about",
      title: "About",
    },
    {
      link: "#event",
      title: "Event",
    },
    {
      link: "#timeline",
      title: "Timeline",
    },
  ];

  return (
    <footer className="bg-myText dark:bg-myBg border-t-2 border-myBg mt-[30px] p-2 rounded-3xl">
      <div className="flex flex-col justify-center items-center p-2">
        <h1 className="text-3xl md:text-4xl font-bold text-myBg dark:text-myText">
          Studyclub
        </h1>
        <div className="w-full flex gap-3 justify-center items-center mt-[10px]">
          {kelas.map((X) => {
            return (
              <div className="transition duration-300 ease-in transform hover:translate-y-1 bg-myAccent/70 flex justify-center items-center p-1 rounded-full">
                <X color="white" size={25} />;
              </div>
            );
          })}
        </div>
        <div className="w-max md:w-[80%] mx-auto border-t border-myBg dark:border-myText mt-[20px]">
          <ul className="flex justify-center items-center gap-2 md:gap-10 mt-[20px]">
            {footlink.map((link) => {
              return (
                <li className="transition duration-300 ease-in transform hover:translate-y-1 text-myBg dark:text-myText text-xl md:text-2xl hover:text-myAccent">
                  <a href={link.link}>{link.title}</a>
                </li>
              );
            })}
          </ul>
          <div className="text-myBg dark:text-myText text-center mt-[20px]">
            <p>Terms & Conditions Privacy Policy</p>
            <p>Copyright 2024 All Rights By Himtika</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
