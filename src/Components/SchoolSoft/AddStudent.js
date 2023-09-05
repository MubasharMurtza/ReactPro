import React, { useState } from "react";
import { Form, Row, Col, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Students from "./Students";
import { FaPlusSquare } from "react-icons/fa";

export default function AddStudent() {
  return (
    <>
      <h5 className="text-center bg-secondary text-white">Students</h5>
      <Table className="me-1 mx-1">
        <tr>
          <td>
            <Form.Label>Student ID:</Form.Label>
            <Form.Control type="number" id="studentID" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Student Name:</Form.Label>
            <Form.Control type="text" id="studentName" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Father Name:</Form.Label>
            <Form.Control type="text" id="fatherName" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Father Name:</Form.Label>
            <Form.Control type="text" id="fatherName" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Father Name:</Form.Label>
            <Form.Control type="text" id="fatherName" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Father Name:</Form.Label>
            <Form.Control type="text" id="fatherName" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Class:</Form.Label>
            <Form.Control type="text" id="class" value="" onChange="" />
          </td>
          <td>
            <Form.Label>Contect No:</Form.Label>
            <Form.Control type="tel" id="contect" value="" onChange="" />
          </td>
          <td>
            <Button onClick="" variant="primary" type="submit" id="submit">
              <FaPlusSquare />
            </Button>
          </td>
        </tr>
      </Table>
      <Row>
        <Col>
          <Students />
        </Col>
      </Row>
    </>
  );
}
