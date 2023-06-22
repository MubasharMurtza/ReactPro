import React from 'react'
import './Sidebar.css';
import nflogo from './Pics/nflogo.png';
import { FaBars, FaSign } from "react-icons/fa";

function Sidebar() {
const dataArray = [
    {
        path: "/",
        name: "Software1",
        icon:<FaSign />,
        subArray:[
            {
                path: "/",
                name: "Software12",
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
                <span><FaBars className='bar' /></span>
                <span><img className='logo' src={nflogo} alt="Logo" /></span>
        </div>
        <div className='body'>
            {dataArray.map((data, index) => (
                <div key={index} className='dt'>
                    <div className='dtname'>
                        <span style={{marginRight:"10px"}}>{data.icon}</span>
                        <span>{data.name}</span>
                    </div>
                </div>
            ))}
        </div>
    </>
)
}

export default Sidebar