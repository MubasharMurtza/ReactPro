import React, { useState } from 'react'
import Sidebar from './Nav/Sidebar';
import ScaleParty from './ScaleSoft/ScaleParty';

export default function FunctionF() {
    const [isShow, setisShow] = useState(false);
  const toggle = () => {
    setisShow(!isShow);
  };

    return (
    <>
    <div>
        <Sidebar isShow={isShow} toggle={toggle} setisShow={setisShow} />
        

        </div>
    </>
  )
}
