import React, { useEffect, useState } from "react";
import { Container, Table, Form, Row, Stack, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Supabase } from "../Supabase";
import StudentUpdate from "./StudentUpdate";

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  async function getStudents() {
    try {
      const { data, error } = await Supabase.from("students")
        .select("*")
        .limit(10);
      if (error) throw error;
      if (data != null) {
        setStudents(data);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredStudents = students.filter((student) => {
    return student.studentname.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleupdate = (index) => {
    const studID = students[index].studentid;
    const studName = students[index].studentname;
    const studFather = students[index].studentfather;
    const studClass = students[index].class;
    const studContect = students[index].contectno;
    // const { data, error } = await Supabase
    // try {
    //   const {error} = await Supabase
    //   .from("students")
    //   .update({
    //     studentid: students.studentid,
    //     studentname: students.studentname,
    //     studentfather: students.studentfather,
    //     class: students.class,
    //     contectno: students.contectno
    //   })
    //     .eq("studentid", students.studentid)
    //   if (error) throw error;
    //   window.location.reload();
    // } catch(err){
    //   alert(err.message);
    // }
  }


  return (
    <>
      <Container>
        <h5 className="text-center mt-4 bg-secondary text-white">Students</h5>
        <Row>
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
        <Table className="table table-hover table-bordered table-striped">
          <thead>
            <tr>
              <td className="text-center">Student ID</td>
              <td>Student Name</td>
              <td>Father Name</td>
              <td className="text-center">Class</td>
              <td className="text-center">Contact No</td>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td className="text-center">{student.studentid}</td>
                <td>{student.studentname}</td>
                <td>{student.studentfather}</td>
                <td className="text-center">{student.class}</td>
                <td className="text-center">{student.contectno}</td>
                <td className="text-center">
                  <Button onClick={() => handleupdate(index)}>Update</Button>
                </td>
                <td className="d-none">
                  <StudentUpdate student={handleupdate} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}