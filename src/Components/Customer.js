import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import AddCustomerModal from "./AddCustomerModal";
import EditCustomerModal from "./EditCustomerModal";

export default class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = { cust: [], addModalShow: false, EditModalShow: false };
  }

  componentDidMount(){
    this.refreshList()
  }

  refreshList() {
    fetch("https://localhost:44327/api/Customer")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ cust: data })
      })
  }
  componentDidUpdate(){
    this.refreshList()
  }

  deleteCustomer(custid) {
    if (window.confirm("Are you sure to delete it?")) {
      fetch("https://localhost:44327/api/Customer/" + custid, {
        method: "Delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  render() {
    const { cust, custid, custname } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let EditModalClose = () => this.setState({ EditModalShow: false });
    return (
      <>
        <Table className="table" table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>CustomerID</th>
              <th>CustomerName</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {cust.map((p) => (
              <tr key={p.CustomerID}>
                <td>{p.CustomerID}</td>
                <td>{p.CustomerName}</td>
                <td>
                  <Button
                    className="mr-2"
                    variant="info"
                    onClick={() =>
                      this.setState({
                        EditModalShow: true,
                        custid: p.CustomerID,
                        custname: p.CustomerName,
                      })
                    }
                  >
                    Update
                  </Button>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() => this.deleteCustomer(p.CustomerID, this.refreshList)}
                  >
                    Delete
                  </Button>
                  <EditCustomerModal
                    show={this.state.EditModalShow}
                    onHide={EditModalClose}
                    custid={custid}
                    custname={custname}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
        variant="primary"
        onClick={() => this.setState({ addModalShow: true })}
      >
        Add Customer
      </Button>
      <AddCustomerModal
      show={this.state.addModalShow}
      onHide={addModalClose}
    />

      </>
    );
  }
}
