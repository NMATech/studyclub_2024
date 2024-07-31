import { Fragment } from "react";
import TimelinePars from "./partials/Timeline_pars";

function Timeline() {
  const timeline = [
    {
      title: "Pendaftaran Peserta dibuka",
      subheading: "12 Januari - 24 Januari 2024",
      direction: "left",
    },
    {
      title: "Pendaftaran Peserta ditutup",
      subheading: "25 Januari 2024",
      direction: "right",
    },
    {
      title: "Periode Belajar",
      subheading: "30 Januari - 30 Maret 2024",
      direction: "left",
    },
    {
      title: "Pengumpulan Tugas Akhir",
      subheading: "5 Juni - 20 Juni 2024",
      direction: "right",
    },
  ];

  return (
    <div className="mt-[20px] md:mt-[50px]" id="timeline">
      <div className="flex flex-col gap-3 text-myBg dark:text-myText text-center">
        <h1 className="font-bold text-myBg dark:text-myText text-3xl md:text-4xl">
          Our Timeline
        </h1>
        <p className="w-[90%] md:w-[60%] mx-auto md:text-xl">
          Jadilah bagian dari perjalanan Studyclub yang penuh inspirasi dengan
          berbagai materi menarik yang kami selenggarakan.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-y-3 w-full my-4 p-2 mt-[20px] md:mt-[50px]">
        {timeline.map((x, index) => {
          return (
            <Fragment key={index}>
              <TimelinePars
                index={index}
                timeline={timeline}
                title={x.title}
                subheading={x.subheading}
                direction={x.direction}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
