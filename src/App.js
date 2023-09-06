import React from "react";
import "./index.css";
import FunctionF from "./Components/FunctionF";
import { BrowserRouter } from "react-router-dom";
import AddStudent from "./Components/SchoolSoft/AddStudent";
//import ForTest from "./Components/ForTest";

function App() {
  return (
    <>
      <BrowserRouter>
      <FunctionF />
      </BrowserRouter>
      {/* <ForTest /> */}
    </>
  );
}

export default App;
