import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function SubArr({ dt, showAnimation, isShow }) {
  const subArrAnimation = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
    show: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 1,
      },
    },
  };

  const [isSubArr, setIsSubArr] = useState(false);
  const togglesubArr = () => setIsSubArr(!isSubArr);

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
        <div>
          <FaAngleDown />
        </div>
      </div>
      {isSubArr && (
        <motion.div
          initial="hidden"
          animate="show"
          exit="hidden"
          className="menuContainer"
        >
          {dt.subArray.map((subarr, i) => (
            <NavLink
              activClassName="activ"
              to={subarr.path}
              key={i}
              className="link"
            >
              <div className="icon">{subarr.icon}</div>
              <AnimatePresence>
                {isShow && (
                  <motion.div
                    variants={subArrAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="title"
                  >
                    {subarr.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </motion.div>
      )}
    </>
  );
}

export default SubArr;
