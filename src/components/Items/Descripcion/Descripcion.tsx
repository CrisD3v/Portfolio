import React from "react";
import Yo from "../../../assets/Img/yo.jpeg";
import { BsLinkedin, BsGithub, BsMessenger } from "react-icons/bs";
import Perfil from "../Perfil/Perfil";

function Descripcion() {
  return (
    <div className="p-2 ">
      <div className="grid grid-cols-12 mb-4">
        <div className="m-auto">
          <Perfil />
        </div>
        <div className="rounded-3xl pl-2 pt-1 col-span-11 bg-secondary hover:bg-gray-300">
          <p className="p-2">
            Full Stack Developer con formación como Diseñador y Desarrollador Web. Experiencia
            trabajando en NodeJS, React, Redux, SQL entre otras tecnologías del sector. Busco una
            oportunidad laboral donde pueda compartir y aumentar mis conocimientos y crecer como profesional. Con
            pensamiento creativo, resolución de problemas, trabajo en equipo, comunicación y
            autonomía.
          </p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12">
        <div className="col-span-12 flex justify-around mt-4 text-xl">
          <div className="flex flex-row items-center gap-2">
            <span className="text-rose-600">
              <BsMessenger />
            </span>
            <p className="text-lg">Contactame</p>
          </div>
          <a href="https://github.com/CrisD3v" target='_blank'>
            <div className="flex flex-row items-center gap-2">
              <span className="text-dark">
                <BsGithub />
              </span>
              <p className="text-lg">Github</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/crisdeveg/" target='_blank'>
            <div className="flex flex-row items-center gap-2">
              <span className="text-sky-700">
                <BsLinkedin />
              </span>
              <p className="text-lg">Linkedin</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Descripcion;
