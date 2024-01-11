import React from "react";
import { Form } from "react-bootstrap";

export default function Create() {
  return (
    <>
      <div>Hello!!</div>
      <div className="conrainer-fluid bg-dark text-light py-.5">
        <header className="text-center">
          <h2 className="display-8 pb-1">Student Form</h2>
        </header>
      </div>
      <section>
        <Form className="row g-2">
          <div className="container">
            <input
              className="form-control"
              type="number"
              id="StudentID"
              placeholder="Student ID"
              style={{
                width: "10%",
                display: "inline-block",
              }}
            />
            <input
              className="form-control"
              type="text"
              id="StudentName"
              placeholder="Student Name"
              style={{
                width: "30%",
                display: "inline-block",
                marginLeft: "10PX",
              }}
            />
            <input
              className="form-control"
              type="text"
              id="ClassName"
              placeholder="Class Name"
              style={{
                width: "20%",
                display: "inline-block",
                marginLeft: "10PX",
              }}
            />
            <input
              className="form-control"
              type="text"
              id="Contact"
              placeholder="Contact No"
              style={{
                width: "20%",
                display: "inline-block",
                marginLeft: "10PX",
              }}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </Form>
      </section>
    </>
  );
}
