import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function StudentUpdate({ show, onHide, student }) {

    const [data, setData] = useState({
      StudentID:student.StudentID,
      StudentName:student.StudentName,
      FatherName:student.FatherName,
      JoiningDate:student.JoiningDate,
      DOB:student.DOB,
      ClassID:student.ClassID,
      SectionID:student.SectionID,
      Fee:student.Fee,
      IdentityCard:student.IdentityCard,
      BForm:student.BForm,
      ContactNo:student.ContactN
    })
    const handleSubmit = (e) => {
      e.preventDefault();

      axios.put('https://localhost:44327/api/students/'+ student.StudentID, data)
           .then(res => console.log("Update Successfully"))
           .catch(err => console.log(err))
           window.location.reload();
    
    }

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Update Student Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Label>Student ID:</Form.Label>
          <Form.Control
            type="number"
            id="StudentID"
            disabled
            value={student.StudentID}
            onChange={e => setData({ ...data, StudentID: e.target.value })}
          />
          <Form.Label>Student Name:</Form.Label>
          <Form.Control
            type="text"
            id="StudentName"
            defaultValue={student.StudentName}
            onChange={e => setData({ ...data, StudentName: e.target.value })}
          />
          <Form.Label>Father Name:</Form.Label>
          <Form.Control
            type="text"
            id="FatherName"
            defaultValue={student.FatherName}
            onChange={e => setData({ ...data, FatherName: e.target.value })}
          />
          <Form.Label>Joining Date:</Form.Label>
          <Form.Control
            type="DateTime"
            id="JoiningDate"
            defaultValue={student.JoiningDate}
            onChange={e => setData({ ...data, JoiningDate: e.target.value })}
          />
          <Form.Label>Date Of Birth:</Form.Label>
          <Form.Control
            type="DateTime"
            id="DOB"
            defaultValue={student.DOB}
            onChange={e => setData({ ...data, DOB: e.target.value })}
          />
          <Form.Label>Class:</Form.Label>
          <Form.Control
            type="text"
            id="ClassID"
            defaultValue={student.ClassID}
            onChange={e => setData({ ...data, ClassID: e.target.value })}
          />
          <Form.Label>Section:</Form.Label>
          <Form.Control
            type="text"
            id="SectionID"
            defaultValue={student.SectionID}
            onChange={e => setData({ ...data, SectionID: e.target.value })}
          />
          <Form.Label>Fee:</Form.Label>
          <Form.Control
            type="text"
            id="Fee"
            defaultValue={student.Fee}
            onChange={e => setData({ ...data, Fee: e.target.value })}
          />
          <Form.Label>IdCard No:</Form.Label>
          <Form.Control
            type="text"
            id="IdentityCard"
            defaultValue={student.IdentityCard}
            onChange={e => setData({ ...data, IdentityCard: e.target.value })}
          />
          <Form.Label>Be Form:</Form.Label>
          <Form.Control
            type="text"
            id="Bform"
            defaultValue={student.BForm}
            onChange={e => setData({ ...data, BForm: e.target.value })}
          />
          <Form.Label>Contect No:</Form.Label>
          <Form.Control
            type="tel"
            id="ContectNO"
            defaultValue={student.ContactNo}
            onChange={e => setData({ ...data, ContactNo: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentUpdate;