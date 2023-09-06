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
    Class: "",
    Section: "",
    Fee: "",
    IdentityCard: "",
    Bform: "",
    ContactNo: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
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
        DateOfBirth: studentData.DateOfBirth,
        Class: studentData.Class,
        Section: studentData.Section,
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
            id="studentID"
            //value={students.studentid}
            onChange={handleChange}
          />
          <Form.Label>Student Name:</Form.Label>
          <Form.Control
            type="text"
            id="studentName"
            //value={data.studName}
            onChange={handleChange}
          />
          <Form.Label>Father Name:</Form.Label>
          <Form.Control
            type="text"
            id="fatherName"
            //value={stdFather}
            onChange={handleChange}
          />
          <Form.Label>Joining Date:</Form.Label>
          <Form.Control
            type="text"
            id="fatherName"
            //value={stdFather}
            onChange={handleChange}
          />
          <Form.Label>Date Of Birth:</Form.Label>
          <Form.Control
            type="text"
            id="fatherName"
            //value={stdFather}
            onChange={handleChange}
          />
          <Form.Label>Class:</Form.Label>
          <Form.Control
            type="text"
            id="class"
            //value={stdClass}
            onChange={handleChange}
          />
          <Form.Label>Section:</Form.Label>
          <Form.Control
            type="text"
            id="class"
            //value={stdClass}
            onChange={handleChange}
          />
          <Form.Label>Fee:</Form.Label>
          <Form.Control
            type="text"
            id="class"
            //value={stdClass}
            onChange={handleChange}
          />
          <Form.Label>IdCard No:</Form.Label>
          <Form.Control
            type="text"
            id="class"
            //value={stdClass}
            onChange={handleChange}
          />
          <Form.Label>Be Form:</Form.Label>
          <Form.Control
            type="text"
            id="class"
            //value={stdClass}
            onChange={handleChange}
          />
          <Form.Label>Contect No:</Form.Label>
          <Form.Control
            type="tel"
            id="contect"
            //value={stdContect}
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
