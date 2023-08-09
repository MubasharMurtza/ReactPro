import React from "react";
import Modal from "react-bootstrap/Modal";

export default function EditPartyModal({ onHide, show, PID, PName }) {

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
            type="text"
            name="PartyID"
            value={PID}
            className="form-control"
          />

          <label class="col-form-label">PartyName:</label>
          <input
            type="text"
            name="PartyName"
            value={PName}
            className="form-control"
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
          <button type="button" className="btn btn-primary" onClick="">
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }