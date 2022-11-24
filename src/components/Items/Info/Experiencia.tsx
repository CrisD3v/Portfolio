import React from "react";
import TooltipDesc from "../Tooltip/TooltipDesc";
interface Props {
  active: boolean;
}

function Experiencia({ active }: Props) {
  const estudios = [
    {
      title: "Comfama",
      info: "Aprendiz en desarrollo de software",
      date: "02-2022 al 07-2022",
      img: "https://pbs.twimg.com/profile_images/1549035373581533184/b4eJRBwE_400x400.jpg",
    },
  ];
  return (
    <div className="flex ">
      <div
        className={`flex ${
          active ? "flex-col gap-10" : null
        } transition duration-300`}
      >
        {estudios.map((d) => (
          <div className="flex flex-row" key={Math.random()}>
            <TooltipDesc text={d.title} date={d.date} info={d.info}>
              <img
                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                src={d.img}
                alt=""
              />
            </TooltipDesc>
            {active && (
              <div className="ml-2 flex flex-col">
                <p>{d.info}</p>
                <p className="text-sm ml-1">{d.date}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiencia;
