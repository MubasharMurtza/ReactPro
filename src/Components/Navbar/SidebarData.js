import React from 'react'
import { FaBars, FaRegChartBar, FaUserAlt, FaBalanceScale, } from "react-icons/fa";

function SidebarData() {

    const mainMenu = [
        {
          path: "/",
          name: "Software1",
          icon: <FaBalanceScale />,
          subMenu:[
                {
                  path: "/page1",
                  name: "Page1",
                  icon: <FaBalanceScale />,
                },
                {
                  path: "/page2",
                  name: "Page2",
                  icon: <FaUserAlt />,
                },
                {
                  path: "/page3",
                  name: "Page3",
                  icon: <FaRegChartBar />,
                },
                {
                  path: "/page4",
                  name: "Page4",
                  icon: <FaRegChartBar />,
                },
                {
                  path: "/page5",
                  name: "Page5",
                  icon: <FaRegChartBar />,
                },
            ]
        },
        {
          path: "/",
          name: "Software2",
          icon: <FaUserAlt />,
        },
        {
          path: "/",
          name: "Software3",
          icon: <FaRegChartBar />,
        },
        {
          path: "/",
          name: "Software4",
          icon: <FaRegChartBar />,
        },
        {
          path: "/",
          name: "Software5",
          icon: <FaRegChartBar />,
        },
      ];

  return (
    {mainMenu}
  )
}

export default SidebarData