import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Party from '../PartyF/Party';
import PParty from '../PartyFolder/PParty';
import Customer from '../Customer';
import Home from '../Home';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

function NavbarLink() {
  return (
    <>
      <BrowserRouter>
        <Topbar/>
        <div style={{display:"flex"}}>
          <Sidebar />
          <Routes>
            <Route path='/Home'  element={<Home />} exact />
            <Route path='/Party' element={<Party />} exact />
            <Route path='/Customer' element={<Customer />} exact />
            <Route path='/Partyp' element={<PParty />} exact />
              

            
            <Route path='/page1' element={<Page1 />} exact />
            <Route path='/page2' element={<Page2 />} exact />
            <Route path="/page3" element={<Page3 />} exact />
            <Route path="/page4" element={<Page4 />} exact />
            <Route path="/page5" element={<Page5 />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default NavbarLink