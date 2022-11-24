import React, { useState } from "react";
import Estudios from "./Estudios";
import { IoIosArrowDown } from "react-icons/io";
import Experiencia from "./Experiencia";

function Info() {
  const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
  const active = () => {
    setOpen(!open);
  };
  const active2 = () => {
    setOpen2(!open2);
  }
  return (
    <div className="grid grid-cols-12">
      <div className="p-2 col-span-12">
        <h2 className="text-2xl font-bold text-gray-900">Información</h2>
      </div>
      <div className="col-span-12">
        <div className="bg-bwg p-2 rounded-md">
          <h3 className="text-center font-semibold">Estudios</h3>
        </div>
        <div className="mt-4 grid grid-cols-12 cursor-pointer" onClick={active}>
          <div className="ml-2 col-span-11">
            <Estudios active={open} />
          </div>
          <div
            className={`flex ${
              open ? "mt-3" : "items-center"
            } justify-end col-span-1`}
          >
            <span>
              <IoIosArrowDown
                className={`${
                  open ? "rotate-180" : null
                } transition duration-300`}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-12 mt-5">
        <div className="bg-bwg p-2 rounded-md">
          <h3 className="text-center font-semibold">Experiencia</h3>
        </div>
        <div className="mt-4 grid grid-cols-12 cursor-pointer" onClick={active2}>
          <div className="ml-2 col-span-11">
            <Experiencia active={open2} />
          </div>
          <div
            className={`flex ${
              open2 ? "mt-3" : "items-center"
            } justify-end col-span-1`}
          >
            <span>
              <IoIosArrowDown
                className={`${
                  open2 ? "rotate-180" : null
                } transition duration-300`}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
