import React from "react";
import {TbAdjustmentsHorizontal} from 'react-icons/tb'

function ProyectoConfig() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <h2 className="text-2xl font-bold text-gray-900">Proyectos</h2>
      </div>
      <div className="col-start-10">
        <div className="bg-bwg rounded-md w-24 p-1">
          <div className="ml-2 mr-2 flex flex-row items-center gap-1">
            <span>
              <TbAdjustmentsHorizontal/>
            </span>
            <p className="text-lg">Filtros</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProyectoConfig;
