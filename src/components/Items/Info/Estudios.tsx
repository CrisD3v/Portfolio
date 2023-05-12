import React from "react";
import TooltipDesc from "../Tooltip/TooltipDesc";

interface Props {
  active: boolean;
}

function Estudios({ active }: Props) {
  const estudios = [
    {
      title: "Soy Henry",
      info: "Bootcamp de Desarrollo Web Full Stack",
      date: "Finalizado en 2022",
      img: "https://assets.soyhenry.com/logoOG.png",
    },
    {
      title: "Sena - Censa",
      info: "Tecnico en desarrollo de software",
      date: "Finalizado en 2022",
      img: "https://lostramites.com.co/wp-content/uploads/logo-sena-fondo-naranja-300x300.jpg",
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
          <div className="flex flex-row items-center" key={Math.random()}>
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

export default Estudios;
