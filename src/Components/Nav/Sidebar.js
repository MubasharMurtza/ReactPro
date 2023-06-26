import React, { useState } from 'react'
import './Sidebar.css';
import nflogo from './Pics/nflogo.png';
import { FaBars, FaSign, FaSearch, FaHome } from "react-icons/fa";
import {AnimatePresence, motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';


const dataArray = [
  {
      path: "/",
      name: "Software1",
      value:"abc",
      icon:<FaHome />,
      subArray:[
          {
              path: "/",
              name: "Value1",
              icon:<FaSign />,
          },
          {
              path: "/",
              name: "Value2",
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

function Sidebar({children}) {
  const [isShow, setisShow] = useState(false)
  const toggle = () => {setisShow(!isShow)}

  const inputAnimation = {
    hidden:{
      width:0,
      padding:0,
      opacity:0
    },
    show:{
      width:"160px",
      padding: "2px 5px",
      opacity:1,
      transition:{
        duration:0.2,
      }
    }
  }

  return (
    <>
        <div>
          <motion.div animate={{width: isShow ? '200px' : '40px'}} className='header'>
            <div className='top'>
              <span>{isShow && <img src={nflogo} alt="Logo" className='logo' />}</span>
              <span><FaBars className='bar' onClick={toggle}/></span>
            </div>
            <div className='search'>
              <div className='search_icon'><FaSearch /></div>
                <AnimatePresence>
                  {isShow && (<motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder='Search...' />)}
                </AnimatePresence>
            </div>
              <section className='arr'>
                {dataArray.map((data, index) => (
                  <NavLink to={Array.path} key={Array.name} className='link'>
                    <div className='icon'>{data.icon}</div>
                    <AnimatePresence>
                      {isShow && <motion.div className='title'>{data.name}</motion.div>}
                    </AnimatePresence>
                  </NavLink>
                ))}
              </section>
          </motion.div>
          <main>{children}</main>
        </div>
    </>
)
}

export default Sidebar