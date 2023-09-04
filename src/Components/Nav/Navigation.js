import React from 'react'
import { NavLink } from 'react-router-dom'
import {Navbar,Nav} from 'react-bootstrap'

export default function Navigation() {
  return (
    <div>
      <Navbar bg="success" expand="lg" style={{ marginLeft:"304px", height:"50px" }}>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
              <Nav style={{ marginLeft:"30px" }}>
                  <NavLink style={{ fontSize:"20px", textDecoration:"none" }} className="d-inline p-2 bg-success text-white" to="/">Home</NavLink>
                  <NavLink style={{ marginLeft:"20px", fontSize:"20px", textDecoration:"none" }} className="d-inline p-2 bg-success text-white" to="/party">Party</NavLink>
                  <NavLink style={{ marginLeft:"20px", fontSize:"20px", textDecoration:"none" }} className="d-inline p-2 bg-success text-white" to="/party">PartyM</NavLink>
                  <NavLink style={{ marginLeft:"20px", fontSize:"20px", textDecoration:"none" }} className="d-inline p-2 bg-success text-white" to="/Partyp">Partyp </NavLink>
              </Nav>       
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
