import axios from "axios";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function ScalePartyModal({ onHide, show, maxPartyID }) {

  const [list, setList] = useState([])
  
  const [partyData, setPartyData] = useState({
    PartyID:1,
    PartyName:"Mubashar Murtza"
  })
  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    console.log(value)
    setPartyData({...partyData,[name]:value})
}

  const newData = {...partyData} 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, newData])
    axios.post('https://localhost:44327/api/scaleparty',{PartyID:{maxPartyID}, PartyName:partyData.PartyName})
    .then(res => {
      window.location.reload()
    })
    .catch((error) => {alert(error)})
  
  }


  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label class="col-form-label">PartyID:</label>
          <input
            type="number"
            name="PartyID"
            value={maxPartyID}
            className="form-control"
            id="PartyID"
            onFocus={handleChange}
          />

          <label class="col-form-label">PartyName:</label>
          <input
            type="text"
            name="PartyName"
            value={partyData.PartyName}
            className="form-control"
            id="PartyName"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={onHide}
            class="btn btn-secondary"
            data-mdb-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }