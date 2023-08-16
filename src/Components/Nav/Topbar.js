import React from "react";
import "./Sidebar.css";
import { FaSign, FaHome } from "react-icons/fa";
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
    path: "/partyM",
    name: "PartyM",
    icon: <FaSign />,
  },
  {
    path: "/gateparty",
    name: "GateParty",
    icon: <FaSign />,
  },
  {
    path: "/gateparty",
    name: "About",
    icon: <FaSign />,
  },
];

function Topbar() {
  return (
    <>
      <nav className="navbar bg-black  my-1   fixed-top">
        <div className="container-fluid">
          <img src={nflogo} alt="Logo" className="logo" />
          
          {dataArray.map((dt) => (
            <Link to={dt.path} key={dt.name}>
              <div className="topLink">{dt.name}</div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Topbar;
