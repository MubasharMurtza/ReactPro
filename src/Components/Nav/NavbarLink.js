import React from "react";
import { Routes, Route } from "react-router-dom";
import Party from "../PartyF/Party";
import PParty from "../PartyFolder/PParty";
import Customer from "../Customer";
import Home from "../Home";
import ScaleParty from "../ScaleSoft/ScaleParty";
import AddParty from "../ScaleSoft/Parties/AddParty";
import Students from "../SchoolSoft/Students";

function NavbarLink({isShow}) {
  return (
    <>
      <div style={{marginLeft: isShow ? "210px" : "50px", marginTop:"60px"}}>
        <Routes>
          <Route path="/Home" element={<Home />} exact />
          <Route path="/Party" element={<Party />} exact />
          <Route path="/Customer" element={<Customer />} exact />
          <Route path="/Partyp" element={<PParty />} exact />
          <Route path="/addParty" element={<AddParty />} exact />

          <Route path="/scaleParty" element={<ScaleParty />} exact />
          <Route path="/students" element={<Students />} exact />
        </Routes>
      </div>
    </>
  );
}

export default NavbarLink;
