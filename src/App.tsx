import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Nav from "./components/Sections/Nav/Nav";
import Main from "./components/Sections/Main/Main";
import Footer from "./components/Sections/Footer/Footer";

function App() {

  return (
    <div className="App grid grid-cols-12 max-h-full max-w-full select-none bg-bwg overflow-x-hidden">
      <div className="col-span-12 z-50">
        <Nav />
      </div>

      <div className="col-span-12">
        <Main />
      </div>

      <div className="col-span-12">
        <Footer />
      </div>
    </div>
  );
}

export default App;
