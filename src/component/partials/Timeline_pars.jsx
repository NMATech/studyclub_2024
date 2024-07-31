function TimelinePars(props) {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
        {props.direction === "left" ? (
          <Card title={props.title} subheading={props.subheading} />
        ) : (
          <div></div>
        )}

        <Pillar />

        {props.direction === "right" ? (
          <Card title={props.title} subheading={props.subheading} />
        ) : (
          <div></div>
        )}
      </div>
      {props.index < props.timeline.length - 1 && <Circle />}
    </>
  );
}

const Circle = () => {
  return <div className="bg-myAccent rounded-full w-4 h-4 p-2"></div>;
};

const Pillar = () => {
  return (
    <div className="rounded-t-full rounded-b-full w-2 h-full md:h-[100px] mx-auto bg-gradient-to-b from-myAccent/50 to-myAccent"></div>
  );
};

const Card = ({ title, subheading }) => {
  return (
    <div className="transition duration-300 ease-in transform hover:translate-y-1 bg-gradient-to-b from-myPrimary/30 to-mySecondary/50 hover:from-myPrimary/50 hover:to-myAccent/80 text-myText p-2 rounded-xl">
      <h1 className="text-md md:text-xl font-bold">{title}</h1>
      <h1 className="text-sm md:text-lg">{subheading}</h1>
    </div>
  );
};

export default TimelinePars;
