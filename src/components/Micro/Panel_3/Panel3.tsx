import React, { useState } from "react";
import Descripcion from "../../Items/Descripcion/Descripcion";
import CardProyecto from "../../Items/Proyectos/CardProyecto";
import Proyecto from "../../Items/Proyectos/Proyecto";
import ProyectoConfig from "../../Items/Proyectos/ProyectoConfig";
import P1 from "../../../assets/Img/VideoGames.png";
import P2 from "../../../assets/Img/Clima.png";
import P3 from "../../../assets/Img/Liberfit.png";
import Modal from "../Modal/Modal";

function Panel3() {
  const [showPopup, setShowPopup] = useState(false);

  const changePopup = () => {
    setShowPopup(!showPopup);
  }

  const proyectos = [
    {
      title: "VideoGames",
      date: "11 de octubre 2022",
      img: P1,
      link: "https://gym-mthatwords.vercel.app/",
    },
    {
      title: "Clima React",
      date: "3 de septiembre 2022",
      img: P2,
      link: "https://weather-app-tawny-tau.vercel.app/",
    },
    {
      title: "LiberFit Gym",
      date: "18 de noviembre 2022",
      img: P3,
      link: "https://liberfitpf.vercel.app/",
    },
  ];
  return (
    <div className="">
      {showPopup && <Modal onDismiss={() => setShowPopup(false)}>Hello</Modal>}
      <div className="p-3 rounded-md bg-white shadow-md mb-5">
        <Descripcion />
      </div>
      <div className="p-4 rounded-md bg-white shadow-md mb-5">
        <ProyectoConfig />
      </div>
      {proyectos.map((d) => (
        <div className="mb-5" key={Math.random()}>
          <CardProyecto
            func={changePopup}
            title={d.title}
            date={d.date}
            img={d.img}
            link={d.link}
          />
        </div>
      ))}
    </div>
  );
}

export default Panel3;
