import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Supabase } from "../Supabase";
import Students from "./Students";

export default function StudentForm() {
  const [stdId, setStdId] = useState("");
  const [stdName, setStdName] = useState("");
  const [stdFather, setStdFather] = useState("");
  const [stdClass, setStdClass] = useState("");
  const [stdContect, setStdcontect] = useState("");

  async function addNewStudent() {
    try {
      const {error} = await Supabase
      .from("students")
      .insert({
        studentid: stdId,
        studentname: stdName,
        studentfather: stdFather,
        class: stdClass,
        contectno: stdContect
      })
      .single()
      if (error) throw error;
      window.location.reload();
    } catch(err){
      alert(err.message);
    }
  }
  
  return (
    <>
        <Row className="me-2 mx-2">
          <Col sm={3}>
            <h5 className="text-center mt-4 bg-secondary text-white">Add Student Form</h5>
            <Form.Label>Student ID:</Form.Label>
            <Form.Control
              type="number"
              id="studentID"
              value={stdId}
              onChange={(e) => setStdId(e.target.value)}
            />
            <Form.Label>Student Name:</Form.Label>
            <Form.Control
              type="text"
              id="studentName"
              value={stdName}
              onChange={(e) => setStdName(e.target.value)}
            />
            <Form.Label>Father Name:</Form.Label>
            <Form.Control
              type="text"
              id="fatherName"
              value={stdFather}
              onChange={(e) => setStdFather(e.target.value)}
            />
            <Form.Label>Class:</Form.Label>
            <Form.Control
              type="text"
              id="class"
              value={stdClass}
              onChange={(e) => setStdClass(e.target.value)}
            />
            <Form.Label>Contect No:</Form.Label>
            <Form.Control
              type="tel"
              id="contect"
              value={stdContect}
              onChange={(e) => setStdcontect(e.target.value)}
            />
            <br />
            <Button onClick={() => addNewStudent()} variant="primary" type="submit" id="submit">Submit</Button>
          </Col>
          <Col sm={9}>
            <Students />
          </Col>
        </Row>
    </>
  );
}
