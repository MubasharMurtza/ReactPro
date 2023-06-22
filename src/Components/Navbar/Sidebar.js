import React, { Children, useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import DDList1 from "./DDList1";
import nflogo from './Pics/nflogo.png';
import SidebarData from "./SidebarData";

function Sidebar({ Children}) {
  const [submenu, setSubmenu] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const abc = null;

  return (
    <>
      <div className="mainDiv">
        <div className="sidebar" style={{ width: isOpen ? "200px" : "0px" }}>
          <div className="top_section">
            <div style={{ display: isOpen ? "block" : "none" }}>
              <img className="logo" src={nflogo} alt="Logo" />
            </div>
            <div
              className="bars"
              style={{ marginLeft: isOpen ? "50px" : "-13px" }}
            >
              <FaBars onClick={toggle} />
            </div>
          </div>
          {abc.map((item, index) => ( 
              <NavLink to={item.path} key={index} className="link" activeClassName="active" onClick={() => setSubmenu(!submenu)} >
              <div className="icon">{item.icon}</div>
              <div className="link_text" style={{ display: isOpen ? "block" : "none" }}>
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{Children}</main>
        <div className="subMenu">{submenu ? <DDList1 /> : null}</div>
      </div>
    </>
  );
}

export default Sidebar;
