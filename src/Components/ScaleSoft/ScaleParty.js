import React, { useEffect, useState } from "react";
import ScalePartyModal from "./ScalePartyModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";
import "../Nav/Sidebar.css";

export default function ScaleParty() {
  const [showModal, setShowModal] = useState(false);

  const [column, setColumn] = useState([]);
  const [data, setdata] = useState([]);
  const maxPartyID = Math.max(...data.map((data) => data.PartyID)) + 1;
  
  useEffect(() => {
    axios.get("https://localhost:44327/api/scaleparty").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setdata(res.data);
    });
  }, []);

  return (
    <>
      <div className="bodyPage">
        <Link to="/addParty" className="btn btn-primary my-3 mx-3 ">
          Add New Party
        </Link>

        <Button onClick={() => setShowModal(true)}>Add New Party</Button>
        <div>
          <ScalePartyModal
            show={showModal}
            onHide={() => setShowModal(false)}
          />
          <SearchBar list={data} column={column} />
        </div>
      </div>
    </>
  );
}
