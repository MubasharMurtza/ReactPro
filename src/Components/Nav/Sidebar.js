import React, { Children, useState } from 'react'
import './Sidebar.css';
import nflogo from './Pics/nflogo.png';
import { FaBars, FaSign, FaSearch, FaHome } from "react-icons/fa";
import {AnimatePresence, motion} from 'framer-motion';
import { NavLink } from 'react-router-dom';

const dataArray = [
  {
      path: "/page1",
      name: "Software1",
      icon:<FaHome />,
      subArray:[
        {
          path: "/page1",
          name: "Software1",
          icon:<FaHome />,
        },
        {
          path: "/page2",
          name: "Software2",
          icon:<FaHome />,
        },
        
      ]
    },
    {
      path: "/page2",
      name: "Software2",
      icon:<FaSign />
    },
    {
      path: "/page3",
      name: "Software3",
      icon:<FaSign />
    },
    {
      path: "/page4",
      name: "Software4",
      icon:<FaSign />
    },
    {
      path: "/page5",
      name: "Software5",
      icon:<FaSign />
    }
]

function Sidebar({Children}) {
  const [isShow, setisShow] = useState(false)
  const toggle = () => {setisShow(!isShow)}

  const inputAnimation = {
    hidden:{
      width:0,
      padding:0,
      opacity:0,
      transition:{
        duration:0.2,
      }
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
  const showAnimation = {
    hidden:{
      width:0,
      opacity:0,
      transition:{
        duration:0.2,
      }
    },
    show:{
      width:'Audio',
      opacity:1,
      transition:{
        duration:0.2,
      }
    }
  }

  return (
    <>
        <div className='main-container'>
          <motion.div animate={{width: isShow ? '200px' : '40px', transition:{duration:0.5,type:"spring",damping:11}}} className='header'>
            <div className='top'>
              <motion.span initial="hidden" animate="show" exit="hidden">{isShow && <img src={nflogo} alt="Logo" className='logo' />}</motion.span>
              <span><FaBars className='bar' onClick={toggle}/></span>
            </div>
            <div className='search'>
              <div className='search_icon'><FaSearch /></div>
                <AnimatePresence>
                  {isShow && (<motion.input initial="hidden" animate="show" exit="hidden" variants={inputAnimation} placeholder='Search...' />)}
                </AnimatePresence>
            </div>
              <section className='arr'>
                {dataArray.map((dt) => (
                  <NavLink activClassName="activ" to={dt.path} key={dt.name} className='link'>
                    <div className='icon'>{dt.icon}</div>
                    <AnimatePresence>
                      {isShow && <motion.div variants={showAnimation} initial="hidden" animate="show" exit="hidden" className='title'>{dt.name}</motion.div>}
                    </AnimatePresence>
                  </NavLink>
                ))}
              </section>
          </motion.div>
          <main>{Children}</main>
        </div>
    </>
)
}

export default Sidebar