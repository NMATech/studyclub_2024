import { FaInstagram } from "react-icons/fa6";

function Sosmed() {
  return (
    <div className="w-[80%] md:w-[50%] mx-auto bg-gradient-to-b from-myPrimary/30 to-myAccent/50 flex flex-col justify-center items-center rounded-2xl p-3 m-3">
      <h1 className="font-bold text-2xl text-myBg dark:text-myText">
        Follow Our Instagram
      </h1>
      <a href="https://www.instagram.com/studyclub_id/" target="_blank">
        <div className="transition duration-300 ease-in-out transform hover:translate-y-1 bg-myAccent p-2 rounded-full mt-[10px]">
          <FaInstagram color="white" size={30} />
        </div>
      </a>
    </div>
  );
}

export default Sosmed;
