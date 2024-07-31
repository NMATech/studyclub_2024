import { Fragment } from "react";
import TimelinePars from "./partials/Timeline_pars";

function Timeline() {
  const timeline = [
    {
      title: "Survei Kelas yang di inginkan oleh Mahasiswa",
      subheading: "11 - 23 Mei 2024",
      direction: "left",
    },
    {
      title: "Open Recruitment Kepanitiaan",
      subheading: "15 - 22 Juni 2024",
      direction: "right",
    },
    {
      title: "Pendaftaran Peserta Study Club",
      subheading: "4 - 11 Juli 2024",
      direction: "left",
    },
    {
      title: "Pelaksanaan Study Club",
      subheading: "13 Juli - 20 Oktober 2024",
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
