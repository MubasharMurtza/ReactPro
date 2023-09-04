import React from "react";
import "./Sidebar.css";
import { FaSign, FaHome, FaBars } from "react-icons/fa";
import nflogo from "./Pics/nflogo.png";
import { Link } from "react-router-dom";

const dataArray = [
  {
    path: "/Home",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/party",
    name: "Party",
    icon: <FaSign />,
  },
  {
    path: "/Customer",
    name: "Customer",
    icon: <FaSign />,
  },
  {
    path: "/Partyp",
    name: "Partyp",
    icon: <FaSign />,
  },
  {
    path: "/gateparty",
    name: "About",
    icon: <FaSign />,
  },
];

function Topbar({toggle}) {
  
  return (
    <>
     <nav className="navbar   fixed-top">
        <div className="topBar">
        <span className="bar" onClick={toggle}><FaBars  /></span>
          <img src={nflogo} alt="Logo" className="logo" />
          {dataArray.map((dt) => (
            <Link to={dt.path} key={dt.name}>
              <div className="topLink">{dt.icon}{dt.name}</div>
            </Link>
          ))}
        </div>
      </nav>
      </>
  );
}

export default Topbar;
