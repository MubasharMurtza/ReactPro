import React, { useEffect, useState } from "react";
import { Form, Row, Stack, Button, Table } from "react-bootstrap";
import { FaPenFancy, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import StudentUpdate from "./StudentUpdate";
import AddStudent from "./AddStudent";

export default function Students() {
  const [addShow, setAddShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
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
  
   const [idd, setIdd] = useState()

  const UpdateStudent = (StudentID) => {
    setEditShow(true)
    setIdd(StudentID)  
  }

  return (
    <>
      <Row>
        <Stack direction="horizontal">
          <Form.Label className="mt-2 fw-bold">Search:</Form.Label>
          <Form.Control
            style={{ width: "300px" }}
            type="text"
            placeholder="Search student Name"
            value={searchTerm}
            onChange={handleChange}
          />
          <Button variant="info" onClick={() => setAddShow(true)}>
            Add New Student
          </Button>
        </Stack>
      </Row>
      <AddStudent show={addShow} onHide={() => setAddShow(false)} />
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
              <td>{new Date(student.JoiningDate).toDateString()}</td>
              <td>{new Date(student.DOB).toDateString()}</td>
              <td>{student.ClassID}</td>
              <td>{student.SectionID}</td>
              <td>{student.Fee}</td>
              <td>{student.IdentityCard}</td>
              <td>{student.BForm}</td>
              <td>{student.ContactNo}</td>
              <td>
                <Button variant="info" onClick={() => UpdateStudent(student.StudentID)}>
                  <FaPenFancy />
                </Button>
              </td>
              <td>
                <Button variant="danger">
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <StudentUpdate show={editShow} id={idd} onHide={() => setEditShow(false)} />
    </>
  );
}
