import React from "react";
import Perfil from "../Perfil/Perfil";

interface Props {
  title: string;
  date: string;
}


function Proyecto({ title, date}: Props) {
  return (
    <div className="p-2">
      <div className="grid grid-cols-12">
        <div className="col-span-12 grid grid-cols-12">
          <div className="">
            <Perfil />
          </div>
          <div className="col-start-2 col-span-2 mt-2">
            <div className="grid grid-cols-12">
              <p className="font-semibold col-span-12">{title}</p>
              <p className="font-extralight text-sm text-opacity-50 text-black col-span-12 w-max">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyecto;
