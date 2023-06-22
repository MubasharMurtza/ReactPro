import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Snackbar from "@material-ui/core/Snackbar";
import { IconButton } from "@material-ui/core";

export default class EditCustomerModal extends Component {
  constructor(props) {
    super(props);

    this.state = { snackbaropen: false, snackbarmsg: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  snackbarClose = (event) => {
    this.setState({ snackbaropen: false });
  };

  handleSubmit(event) {
    fetch("https://localhost:44327/api/customer", {
      method: "PUT",
      headers: {
        Accept: "application/Json",
        "Content-Type": "application/Json",
      },
      body: JSON.stringify({
        CustomerID: event.target.CustomerID.value,
        CustomerName: event.target.CustomerName.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //alert(result);
          this.setState({ snackbaropen: true, snackbarmsg: result });
        },
        (error) => {
          //alert("Failed");
          this.setState({ snackbaropen: true, snackbarmsg: "Failed n" });
        }
      );
  }

  render() {
    return (
      <div className="container">
        <Snackbar
          anchorOrigin={{ vertical: "center", horizontal: "center" }}
          open={this.state.snackbaropen}
          autoHideDuration={3000}
          onClose={this.snackbarClose}
          message={<span id="message-id">{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-Label="close"
              color="inherit"
              onClick={this.snackbarClose}
            >
              X
            </IconButton>,
          ]}
        />

        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Customer
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="CustomerID">
                <Form.Label>Customer ID</Form.Label>
                <Form.Control
                  type="text"
                  name="CustomerID"
                  required
                  disabled
                  defaultValue={this.props.custid}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="CustomerName">
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  name="CustomerName"
                  required
                  defaultValue={this.props.custname}
                  placeholder="Enter Customer Name"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
