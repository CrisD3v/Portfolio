import React from "react";
import Panel from "../../Micro/Panel_1/Panel";
import Panel2 from "../../Micro/Panel_2/Panel2";
import Panel3 from "../../Micro/Panel_3/Panel3";

function Main() {

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 mb-5 pb-5 bg-white">
        <Panel />
      </div>
      <div className="mr-5 ml-5 col-span-12 grid grid-cols-12">
        <div className="col-start-2 col-span-4 mr-3">
          <Panel2 />
        </div>
        <div className="col-span-5">
          <Panel3 />
        </div>
      </div>
    </div>
  );
}

export default Main;
