import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function SubArr({ dt, showAnimation, isShow,setisShow }) {
  const subArrAnimation = {
    hidden: {
      opacity: 0,
      height: 0,
      padding: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const menuItemAnimation = {
    hidden: (i) => ({
      padding: 0,
      x: "-100%",
      transition: {
        duration: (i + 1) * 0.3,
      },
    }),
    show: (i) => ({
      x: 0,
      transition: {
        duration: (i + 1) * 0.3,
      },
    }),
  };

  const [isSubArr, setIsSubArr] = useState(false);
  const togglesubArr = () => {
    setIsSubArr(!isSubArr);
    setisShow(true);
}

useEffect(() => {
    if(!isShow){
      setIsSubArr(false)
    }
  }, [isShow])


  return (
    <>
      <div className="menu" onClick={togglesubArr}>
        <div className="menuItem">
          <div className="icon">{dt.icon}</div>
          <AnimatePresence>
            {isShow && (
              <motion.div
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="title"
              >
                {dt.name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {isShow && (
          <motion.div animate={isSubArr ? {rotate:-90} : {rotate:0}}>
            <FaAngleDown />
          </motion.div>
        )}
      </div>
      <AnimatePresence>
        {isSubArr && (
          <motion.div
            variants={subArrAnimation}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="menuContainer"
          >
            {dt.subArray.map((subarr, i) => (
              <motion.div variants={showAnimation} custom={i} key={i}>
                <NavLink
                  activClassName="activ"
                  to={subarr.path}
                  className="link"
                >
                  <div className="icon">{subarr.icon}</div>
                  <AnimatePresence>
                    {isShow && (
                      <motion.div variants={showAnimation} className="title">
                        {subarr.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default SubArr;
