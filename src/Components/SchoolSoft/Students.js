import React, { useEffect, useState } from "react";
import { Form, Row, Stack, Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import StudentUpdate from "./StudentUpdate";

export default function Students() {
  const [show, setShow] = useState(false);
  const [students, setStudents] = useState([]);
  const [column, setColumn] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:44327/api/students").then((res) => {
      setColumn(Object.keys(res.data[0]));
      setStudents(res.data);
    });
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredStudents = students.filter((student) => {
    return student.StudentName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return (
    <>
      <Row>
        <h5 className="text-center bg-secondary text-white">Students</h5>
        <Stack direction="horizontal" gap={2}>
          <Form.Label className="mt-2 fw-normal">Search:</Form.Label>
          <Form.Control
            style={{ width: "300px" }}
            type="text"
            placeholder="Search student Name"
            value={searchTerm}
            onChange={handleChange}
          />
        </Stack>
      </Row>
      <Table className="table table striped bordered hover size=sm">
        <thead>
          <tr>
            {column.map((c, index) => (
              <th key={index}>{c}</th>
            ))}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.StudentID}</td>
              <td>{student.StudentName}</td>
              <td>{student.FatherName}</td>
              <td>{student.JoiningDate}</td>
              <td>{student.ClassID}</td>
              <td>{student.SectionID}</td>
              <td>{student.Fee}</td>
              <td>{student.IdentityCard}</td>
              <td>{student.BForm}</td>
              <td>{student.ContactNo}</td>
              <td>
                <Button variant="info" onClick={() => setShow(true)}>
                  Edit
                </Button>
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <StudentUpdate show={show} onHide={() => setShow(false)} />
    </>
  );
}
