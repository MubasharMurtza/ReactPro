import React from "react";
import "./index.css";
import FunctionF from "./Components/FunctionF";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavbarLink /> */}
        {/* <BasicForm /> */}
        <FunctionF />
      </BrowserRouter>
    </>
  );
}

export default App;
