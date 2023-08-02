import React, { useEffect, useState } from "react";
import ScalePartyModal from "./ScalePartyModal";
import Button from "react-bootstrap/Button";
import axios from "axios";
import SearchBar from "../SearchBar";

export default function ScaleParty() {
  const [showModal, setShowModal] = useState(false);

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:44327/api/scaleparty").then((res) => {
      setdata(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <Button onClick={() => setShowModal(true)}>Show Modal</Button>
        <ScalePartyModal show={showModal} onHide={() => setShowModal(false)} />
      </div>
      <SearchBar list={data} />
    </>
  );
}
