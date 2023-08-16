import React, { useState } from 'react'
import Sidebar from './Nav/Sidebar';

export default function FunctionF() {
    const [isShow, setisShow] = useState(false);
  const toggle = () => {
    setisShow(!isShow);
  };

    return (
    <>
        <Sidebar isShow={isShow} toggle={toggle} setisShow={setisShow} />
    </>
  )
}
