import React, { useEffect, useState } from "react";
import ScalePartyModal from "./ScalePartyModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

export default function ScaleParty() {
  const [showModal, setShowModal] = useState(false);

  const [column, setColumn] = useState([]);
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:44327/api/scaleparty").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setdata(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <Link to="/addParty" className="btn btn-primary"> Add New Party</Link>
        <Button onClick={() => setShowModal(true)}>Add New Party</Button>
        <ScalePartyModal show={showModal} onHide={() => setShowModal(false)} />
      </div>
      <div>
        <SearchBar list={data} column={column}  />
      </div>
    </>
  )
}
