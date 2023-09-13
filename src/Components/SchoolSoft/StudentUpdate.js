import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function StudentUpdate({ show, onHide, idd }) {

  const [studentData, setStudentData] = useState({})
  
    useEffect(() => {
      axios.get("https://localhost:44327/api/students/" + idd)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    }, [])
    
  // const handleChange = (e) => {
  //   const name = e.target.id;
  //   const value = e.target.value;
  //   setStudentData({...studentData, [name]: value });
  // }

  const handleUpdate = (e) => {
    // e.preventDefault();
    // axios.put("https://localhost:44327/api/students/101", studentData)
    //   .then(res => {
    //     alert("Student Updated Successfully");
    //     window.location.reload();
    //   })
    //   .catch(err => {
    //     alert("Something went wrong");
    //   })
   }
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
            id="StudentID"
            disabled
            //defaultValue={student.StudentID}
            //onChange={handleChange}
          />
          <Form.Label>Student Name:</Form.Label>
          <Form.Control
            type="text"
            id="StudentName"
            //defaultValue={student.StudentName}
            //onChange={handleChange}
          />
          <Form.Label>Father Name:</Form.Label>
          <Form.Control
            type="text"
            id="FatherName"
            //defaultValue={student.FatherName}
            //onChange={handleChange}
          />
          <Form.Label>Joining Date:</Form.Label>
          <Form.Control
            type="DateTime"
            id="JoiningDate"
            //defaultValue={student.JoiningDate}
            //onChange={handleChange}
          />
          <Form.Label>Date Of Birth:</Form.Label>
          <Form.Control
            type="DateTime"
            id="DOB"
            //defaultValue={student.DOB}
            //onChange={handleChange}
          />
          <Form.Label>Class:</Form.Label>
          <Form.Control
            type="text"
            id="ClassID"
            //defaultValue={student.ClassID}
            //onChange={handleChange}
          />
          <Form.Label>Section:</Form.Label>
          <Form.Control
            type="text"
            id="SectionID"
            //defaultValue={student.SectionID}
            //onChange={handleChange}
          />
          <Form.Label>Fee:</Form.Label>
          <Form.Control
            type="text"
            id="Fee"
            //defaultValue={student.Fee}
            //onChange={handleChange}
          />
          <Form.Label>IdCard No:</Form.Label>
          <Form.Control
            type="text"
            id="IdentityCard"
            //defaultValue={student.IdentityCard}
            //onChange={handleChange}
          />
          <Form.Label>Be Form:</Form.Label>
          <Form.Control
            type="text"
            id="Bform"
            //defaultValue={student.BForm}
            //onChange={handleChange}
          />
          <Form.Label>Contect No:</Form.Label>
          <Form.Control
            type="tel"
            id="ContectNO"
            //defaultValue={student.ContactNo}
            //onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentUpdate;