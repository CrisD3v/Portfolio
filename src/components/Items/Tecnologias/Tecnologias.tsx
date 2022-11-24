import React from "react";

import { FaReact, FaJs, FaNodeJs, FaNpm } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiSequelize,
} from "react-icons/si";
import Tooltip from "../Tooltip/Tooltip";

function Tecnologias() {
  const tech = [
    { icon: <FaReact />, text: "React", color: "text-blue-500" },
    { icon: <FaJs />, text: "Javascript", color: "text-yellow-400" },
    { icon: <FaNodeJs />, text: "NodeJs", color: "text-green-500" },
    { icon: <FaNpm />, text: "Npm", color: "text-red-500" },
    { icon: <SiTypescript />, text: "Typescript", color: "text-blue-500" },
    { icon: <SiExpress />, text: "Express", color: "text-green-500" },
    { icon: <SiPostgresql />, text: "PostgreSQL", color: "text-blue-500" },
    { icon: <SiRedux />, text: "Redux", color: "text-purple-500" },
    { icon: <SiSequelize />, text: "Sequelize", color: "text-blue-500" },
    { icon: <SiTailwindcss />, text: "TailwindCSS", color: "text-sky-400" },
  ];
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 mb-10 p-2">
        <h2 className="text-2xl font-bold text-gray-900">Tecnologias & Librerias</h2>
      </div>
      <div className="col-span-12">
        <div className="flex justify-evenly gap-16 flex-wrap mb-5">
          {tech.map((d) => (
            <Tooltip text={d.text} key={Math.random()}>
              <div className={`flex items-center justify-center  w-20 h-20 border border-rose-700 rounded-md border-opacity-10 cursor-pointer`}>
                <span className={`${d.color} text-5xl`}>{d.icon}</span>
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tecnologias;
