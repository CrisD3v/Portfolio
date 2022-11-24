import React from "react";
import FooterCard from "./FooterCard";
import Proyecto from "./Proyecto";
import ProyectoConfig from "./ProyectoConfig";

interface Props {
  title: string;
  date: string;
  img: string;
  link: string;
  func? : () => void;
}

function CardProyecto({ title, date, img, link , func}: Props) {
  return (
    <div className="grid grid-cols-12">
      <div className="w-full shadow-md rounded-md col-span-12">
        <div className="pl-3 pr-3 rounded-t-md bg-white border-b">
          <Proyecto date={date} title={title} />
        </div>
        <div className="">
          <img
            src={img}
            alt=""
          />
        </div>
        <div className="">
            <FooterCard link={link} func={func}/>
        </div>
      </div>
    </div>
  );
}

export default CardProyecto;
