import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function StudentUpdate({ show, onHide }) {

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Student ID:</Form.Label>
            <Form.Control
              type="number"
              id="studentID"
              //value={students.studentid}
              //onChange={(e) => setStdId(e.target.value)}
            />
            <Form.Label>Student Name:</Form.Label>
            <Form.Control
              type="text"
              id="studentName"
              //value={data.studName}
              //onChange={(e) => setStdName(e.target.value)}
            />
            <Form.Label>Father Name:</Form.Label>
            <Form.Control
              type="text"
              id="fatherName"
              //value={stdFather}
              //onChange={(e) => setStdFather(e.target.value)}
            />
            <Form.Label>Class:</Form.Label>
            <Form.Control
              type="text"
              id="class"
              //value={stdClass}
              //onChange={(e) => setStdClass(e.target.value)}
            />
            <Form.Label>Contect No:</Form.Label>
            <Form.Control
              type="tel"
              id="contect"
              //value={stdContect}
              //onChange={(e) => setStdcontect(e.target.value)}
            />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary">
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentUpdate;