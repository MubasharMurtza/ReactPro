import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function DDList1() {

  const subMenu1 = [
    {
      path: "/page1",
      name: "Page1",
    },
    {
      path: "/page2",
      name: "Page2",
    },
    {
      path: "/page3",
      name: "Page3",
    },
    {
      path: "/page4",
      name: "Page4",
    },
    {
      path: "/page5",
      name: "Page5",
    },
  ];
  return (
    <>
      <div className="subMenu">
        {subMenu1.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default DDList1;
