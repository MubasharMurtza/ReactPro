import React from "react";
import { useState } from "react";

export default function SetTimeDate() {
    // const currentDate = new Date().toLocaleString();
    const [date, setDate] = useState("")
    const func = () => {
        const t = new Date().toLocaleString();
        setDate(t)
    }
  return (
    <>
      <div onClick={() => func()}>SetTimeDate</div>
      <h1>{date}</h1>
    </>
  );
}
