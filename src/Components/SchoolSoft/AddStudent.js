import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function AddStudent({ show, onHide }) {
  const [list, setList] = useState([]);

  const [studentData, setStudentData] = useState({
    StudentID: "",
    StudentName: "",
    FatherName: "",
    JoiningDate: "",
    DateOfBirth: "",
    ClassID: "",
    SectionID: "",
    Fee: "",
    IdentityCard: "",
    Bform: "",
    ContactNo: "",
  });

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    console.log(value);
    setStudentData({ ...studentData, [name]: value });
  };

  const newData = { ...studentData };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, newData]);
    axios
      .post("https://localhost:44327/api/students", {
        StudentID: studentData.StudentID,
        StudentName: studentData.StudentName,
        FatherName: studentData.FatherName,
        JoiningDate: studentData.JoiningDate,
        DOB: studentData.DateOfBirth,
        ClassID: studentData.ClassID,
        SectionID: studentData.SectionID,
        Fee: studentData.Fee,
        IdentityCard: studentData.IdentityCard,
        Bform: studentData.Bform,
        ContactNo: studentData.ContactNo,
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((error) => {
        alert(error);
      });
  };

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
            //value="{studentData.StudentID}"
            onChange={handleChange}
          />
          <Form.Label>Student Name:</Form.Label>
          <Form.Control
            type="text"
            id="StudentName"
            //value={studentData.StudentName}
            onChange={handleChange}
          />
          <Form.Label>Father Name:</Form.Label>
          <Form.Control
            type="text"
            id="FatherName"
            //value={studentData.FatherName}
            onChange={handleChange}
          />
          <Form.Label>Joining Date:</Form.Label>
          <Form.Control
            type="text"
            id="JoiningDate"
            //value={studentData.JoiningDate}
            onChange={handleChange}
          />
          <Form.Label>Date Of Birth:</Form.Label>
          <Form.Control
            type="text"
            id="DOB"
            //value={studentData.DateOfBirth}
            onChange={handleChange}
          />
          <Form.Label>Class:</Form.Label>
          <Form.Control
            type="text"
            id="ClassID"
            //value={studentData.ClassID}
            onChange={handleChange}
          />
          <Form.Label>Section:</Form.Label>
          <Form.Control
            type="text"
            id="SectionID"
            //value={studentData.SectionID}
            onChange={handleChange}
          />
          <Form.Label>Fee:</Form.Label>
          <Form.Control
            type="text"
            id="Fee"
            //value={studentData.Fee}
            onChange={handleChange}
          />
          <Form.Label>IdCard No:</Form.Label>
          <Form.Control
            type="text"
            id="IdentityCard"
            //value={studentData.IdentityCard}
            onChange={handleChange}
          />
          <Form.Label>Be Form:</Form.Label>
          <Form.Control
            type="text"
            id="Bform"
            //value={studentData.Bform}
            onChange={handleChange}
          />
          <Form.Label>Contect No:</Form.Label>
          <Form.Control
            type="tel"
            id="ContectNO"
            //value={studentData.ContactNo}
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStudent;
