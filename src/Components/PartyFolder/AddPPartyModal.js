import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/table';

function PParty() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [list, setList] = useState([]);
  const [partyData, setPartyData] = useState(
    {
      PartyID:1,
      PartyName:"Mubashar Murtza"
    }
  );
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPartyData({...partyData, [name]:value})
  }
  const newList = {...partyData}
  console.log(newList)
  const handleSubmit = (event) => {
    event.preventDefault();
    setList([...list, newList])
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Party
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="PartyID">
              <Form.Label>Party ID</Form.Label>
              <Form.Control type="number" placeholder="Party ID" value={partyData.PartyID} name="PartyID" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="PartyName">
              <Form.Label>Party Name</Form.Label>
              <Form.Control type="text" placeholder="Party Name" value={partyData.PartyName} name="PartyName" onChange={handleChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Table>
          <thead>
            <tr>
              <th>Party ID</th>
              <th>Party Name</th>
            </tr>
          </thead>
          <tbody>
          {list.map((pr) => (
            <tr key={pr.PartyID}>
              <td>{pr.PartyID}</td>
              <td>{pr.PartyName}</td>
            </tr>
            ))}
          </tbody>
      </Table>
    </>
  );
}

export default PParty;
