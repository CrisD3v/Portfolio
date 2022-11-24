import React from "react";

function Caja() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 grid grid-cols-12 border-t border-b w-box p-2">
        <div className="col-span-12 mb-1">
          <h2 className="text-lg font-bold">USERNAME</h2>
        </div>
        <div className="w-box">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            pariatur qui quia officia illo eius. Facilis, doloribus nemo
            reiciendis ipsa veniam repellendus maxime esse eum quos iste,
            possimus ad. Ipsa?
          </p>
        </div>
      </div>
      <div className="col-span-12 mt-1">
        <div className="flex justify-end mr-16">
          <p className="text-xs text-gray-300">22 de noviembre 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Caja;
