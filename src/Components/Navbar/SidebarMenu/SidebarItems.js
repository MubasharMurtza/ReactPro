import React, { useState } from "react";
import "./SidebarMenu.css";

function SidebarItems({ item }) {
  const [open, setOpen] = useState(false);

  if (item.items) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidbar-title">
          <span>
            {item.icon && <i className={item.icon}></i>}
            {item.title}
            <i
              className="bi-chevron-down toggle-btn"
              onClick={() => setOpen(!open)}
            ></i>
          </span>
        </div>
        <div className="sidebar-content">
            { item.items.map((itm, index) => <SidebarItems key={index} item={itm} />) }
        </div>
      </div>
    )
  } else {
    return (
      <a href={item.path || "#"} className= "sidebar-item plain">
            {item.icon && <i className={item.icon}></i>}
            {item.title}
      </a>
    )
  }
}

export default SidebarItems;
