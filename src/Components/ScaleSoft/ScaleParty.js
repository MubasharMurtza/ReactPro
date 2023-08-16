import React, { useEffect, useState } from "react";
import ScalePartyModal from "./ScalePartyModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import "../Nav/Sidebar.css";
import { AnimatePresence, motion } from "framer-motion";


export default function ScaleParty() {
  const [showModal, setShowModal] = useState(false);

  const [column, setColumn] = useState([]);
  //const [data, setdata] = useState(dt);
  
  const data = [
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
    {
      PartyID:1,
      PartyName:"NoorFatima Traders"
    },
      
  ]
  const [isShow, setisShow] = useState(false);
  const toggle = () => {
    setisShow(!isShow);
  };

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "160px",
      padding: "2px 5px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };


  
  // useEffect(() => {
  //   axios.get("https://localhost:44327/api/scaleparty").then((res) => {
  //     setColumn(Object.keys(res.data[0]));
  //     setdata(res.data);
  //   });
  // }, []);

  return (
    <>
    <div className="bodyPage" >
    <div>
    
        <Link to="/addParty" className="btn btn-primary mx-2 my-5"> Add New Party</Link>
        <Button onClick={() => setShowModal(true)}>Add New Party</Button>
        <ScalePartyModal show={showModal} onHide={() => setShowModal(false)} />

      </div>
      <div>
        <SearchBar list={data} column={column}  />
      </div>
      </div>
    </>
  )
}
