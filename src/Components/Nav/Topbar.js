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
  {
    path: "/gateparty",
    name: "About",
    icon: <FaSign />,
  },
  
];

function Topbar() {
  return (
    <>
   
     
       
            {/* {dataArray.map((dt) => (
            <NavLink to={dt.path} key={dt.name}>
                <div className="topLink">
                {dt.name}
                </div>
            </NavLink>
            ))} */}
       
       <ul class="nav fixed-top  bg-dark" data-bs-theme="dark ">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
      
    </>
  );
}

export default Topbar;
