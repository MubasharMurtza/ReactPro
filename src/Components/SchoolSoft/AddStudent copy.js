import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import { FaPlusSquare } from "react-icons/fa";

export default function AddStudent() {
  return (
    <>
      <h5 className="text-center bg-secondary text-white">Students</h5>
      <Row className="me-1 mx-1">
        <Col>
          <Form.Label>Student ID:</Form.Label>
          <Form.Control type="number" id="studentID" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Student Name:</Form.Label>
          <Form.Control type="text" id="studentName" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Father Name:</Form.Label>
          <Form.Control type="text" id="fatherName" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Father Name:</Form.Label>
          <Form.Control type="text" id="fatherName" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Father Name:</Form.Label>
          <Form.Control type="text" id="fatherName" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Father Name:</Form.Label>
          <Form.Control type="text" id="fatherName" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Class:</Form.Label>
          <Form.Control type="text" id="class" value="" onChange="" />
        </Col>
        <Col>
          <Form.Label>Contect No:</Form.Label>
          <Form.Control type="tel" id="contect" value="" onChange="" />
        </Col>
        <Col>
          <Button onClick="" variant="primary" type="submit" id="submit">
          <FaPlusSquare />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Students />
        </Col>
      </Row>
    </>
  );
}
