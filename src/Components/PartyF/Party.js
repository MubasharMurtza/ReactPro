import React, { Component } from "react";
import { Button, ButtonToolbar, Table } from "react-bootstrap";
import AddPartyModal from "./AddPartyModal";

export default class Party extends Component {
  constructor(props) {
    super(props);
    this.state = { part: [], addModalShow: false,  };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch("https://localhost:44327/api/party")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ part: data });
      });
  }

  render() {
    const { part, prtid } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
      <>
        <Table className="table" table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>PartyID</th>
              <th>PartyName</th>
            </tr>
          </thead>
          <tbody>
            {part.map((p) => (
              <tr key={p.PartyID}>
                <td>{p.PartyID}</td>
                <td>{p.PartyName}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div style={{ textAlign: "right" }}>
          <ButtonToolbar>
            <Button
              variant="primary"
              onClick={() => this.setState({ 
                addModalShow: true,
              })
            } 
            >
              Add Party
            </Button>
            <AddPartyModal
              show={this.state.addModalShow}
              onHide={addModalClose}
              prtid={prtid}
            />
          </ButtonToolbar>
        </div>
      </>
    );
  }
}
