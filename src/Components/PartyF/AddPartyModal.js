import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

export default class AddPartyModal extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleSubmit(event) {

    fetch('https://localhost:44327/api/party', {
      method: "post",
      headers: {
        Accept: "application/Json",
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({
        PartyID: null,
        PartyName: event.target.PartyName.value.toString()
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Party
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="PartyName">
              <Form.Label>Party ID</Form.Label>
              <Form.Control
                type="text"
                name="PartyID"
                required
                disabled
                defaultValue={this.props.prtid}
                placeholder="Enter Party ID"
              />
              <Form.Label>Party Name</Form.Label>
              <Form.Control
                type="text"
                name="PartyName"
                placeholder="Enter Party Name"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
