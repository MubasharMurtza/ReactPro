import React from "react";
import { Row, Form, FormLabel } from "react-bootstrap";

export default function Create() {
  return (
    <>
      <div className="conrainer-fluid bg-dark text-light py-.5">
        <header className="text-center">
          <h2 className="display-8 pb-1">Student Form</h2>
        </header>
      </div>
      <section className="container">
        <form className="row g-3">
          <div className="col-md-5">
            <label className="form-label">StudentName: </label>
            <input style={{ width: 400 }} type="email" id="inputEmail4" />
          </div>
          <div className="col-md-5">
            <label className="form-label">StudentName: </label>
            <input style={{ width: 400 }} type="email" id="inputEmail4" />
          </div>

          <div className="col-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
