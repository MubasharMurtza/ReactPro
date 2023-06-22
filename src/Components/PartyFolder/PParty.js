import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/table';
import axios from 'axios';

function PParty() {
  const [show, setShow] = useState(false);

  const [partyData, setPartyData] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://localhost:44327/api/party',{PartyName:partyData})
    .then(res => {
      window.location.reload()
    })
    .catch((error) => {alert(error)})
    setShow(false);
    
  }

  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:44327/api/party')
        .then(res => {setList(res.data)})
  }, [])

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Add New Party
      </Button>

      <Modal show={show} onHide={() => setShow(false)} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Party</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="PartyName">
              <Form.Label>Party Name</Form.Label>
              <Form.Control type="text" placeholder="Party Name" value={partyData.PartyName} name="PartyName" onChange={(e) => setPartyData(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
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
