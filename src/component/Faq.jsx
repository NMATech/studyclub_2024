import { useState } from "react";

import { MdClose } from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";

function Faq() {
  const faqs = [
    {
      question: "Apa itu Study Club ?",
      answer:
        "Study Club adalah forum kegiatan belajar bersama di lingkungan informatika Unsika. Di sini kita akan belajar, berdiskusi, dan berbagi pengetahuan tentang bidang IT dan umum.",
    },
    {
      question: "Ada apa saja di Study Club tahun ini ?",
      answer:
        "Tahun ini, Study Club digelar dengan metode hybrid. Yaitu secara daring dan luring. Ada tida materi utama yang dibuka. Diantaranya : Data Science, Mobile Programming, UI/UX Design",
    },
    {
      question: "Apa benefitnya daftar Study Club ?",
      answer:
        "Kalian yang pasti akan mendapatkan ilmu yang bermanfaat, pengalaman, teman, dan bagi kalian yang rajin hadir disetiap pertemuan serta mengerjakan project akhir akan mendapatkan Sertifikat. Selain itu juga project akhirnya dapat teman teman jadikan portofolio pribadi.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className="">
      <div className="flex flex-col gap-3 p-2 text-center md:mb-[20px]">
        <h1 className="text-myBg dark:text-myText font-bold text-2xl md:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="w-[90%] md:w-[60%] mx-auto md:text-xl text-myBg dark:text-myText">
          Temukan jawaban untuk pertanyaan yang sering diajukan di sini.
        </p>
      </div>
      <div className="p-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <div
              key={index}
              className="w-full md:w-[70%] mx-auto overflow-hidden bg-myPrimary/30 dark:bg-myBg dark:border dark:border-myText rounded-xl p-2 m-2"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between"
              >
                <h1 className="font-bold text-lg md:text-xl text-myBg dark:text-myText">
                  {faq.question}
                </h1>
                {isOpen ? (
                  <MdClose color="#1471f9" size={20} />
                ) : (
                  <HiOutlinePlus color="#1471f9" size={20} />
                )}
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <hr className="bg-myBg dark:bg-myText mt-2" />
                <p className="text-myBg dark:text-myText mt-2">{faq.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
