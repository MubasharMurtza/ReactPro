import React, { useState } from "react";
import Sidebar from "./Nav/Sidebar";
import Topbar from "./Nav/Topbar";
import NavbarLink from "./Nav/NavbarLink";

export default function FunctionF() {
  const [isShow, setisShow] = useState(false);
  const toggle = () => {
    setisShow(!isShow);
  };
  return (
    <>
      <Topbar toggle={toggle} />
      <Sidebar isShow={isShow} setisShow={setisShow} />
      <NavbarLink />
    </>
  );
}
