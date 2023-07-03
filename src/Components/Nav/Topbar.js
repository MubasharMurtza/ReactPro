import React from "react";
import "./Sidebar.css";
import { FaBars, FaSign, FaSearch, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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
];

function Topbar() {
  return (
    <>
      <div className="topMain">
        <div className="topClient">
            {dataArray.map((dt) => (
            <NavLink to={dt.path} key={dt.name}>
                <div className="topLink">
                {dt.name}
                </div>
            </NavLink>
            ))}
        </div>
      </div>
    </>
  );
}

export default Topbar;
