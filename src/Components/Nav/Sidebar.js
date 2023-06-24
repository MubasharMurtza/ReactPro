import React, { useState } from 'react'
import './Sidebar.css';
import nflogo from './Pics/nflogo.png';
import { FaBars, FaSign } from "react-icons/fa";

function Sidebar() {
  const [menubarSize, setMenubarSize] = useState(false)

const dataArray = [
    {
        path: "/",
        name: "Software1",
        value:"abc",
        icon:<FaSign />,
        subArray:[
            {
                path: "/",
                name: "Software123456",
                icon:<FaSign />,
            },
            {
                path: "/",
                name: "Software1",
                icon:<FaSign />,
            }
        ]
      },
      {
        path: "/",
        name: "Software2",
        icon:<FaSign />
      },
      {
        path: "/",
        name: "Software3",
        icon:<FaSign />
      },
      {
        path: "/",
        name: "Software4",
        icon:<FaSign />
      },
      {
        path: "/",
        name: "Software5",
        icon:<FaSign />
      }
]

  return (
    <>
        <div className='header'>
                <span><FaBars className='bar' onClick={() => setMenubarSize(!menubarSize)} /></span>
                <span><img className='logo' src={nflogo} alt="Logo" /></span>
        </div>
        <div className='body' style={{ width: menubarSize ? "50px" : "160px" }} >
            {dataArray.map((data, index) => (
                <div key={index} className='dt'>
                    <div className='dtName'>
                        <span style={{marginRight:"15px"}}>{data.icon}</span>
                        <span style={{display:menubarSize ? "none" : "block", width:"120px"}}>{data.name}</span>
                    </div>
                </div>
            ))}
        </div>
    </>
)
}

export default Sidebar