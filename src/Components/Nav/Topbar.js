import React from "react";
import "./Sidebar.css";
import { FaBars, FaSign, FaSearch, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import nflogo from "./Pics/nflogo.png";

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
     
       <nav className="navbar bg-black  my-1   fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand my-0 text-light mx-2"  href="#">
    <img src={nflogo} alt="Logo" className="logo" />
      Project Name
    </a>
    
    
  </div>
</nav>



      
    </>
  );
}

export default Topbar;
