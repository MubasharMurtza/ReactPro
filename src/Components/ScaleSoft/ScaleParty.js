import React, { useEffect, useState } from 'react'
import ScalePartyModal from './ScalePartyModal';
import Button from "react-bootstrap/Button";
import axios from 'axios';
import SearchBar from '../SearchBar';


export default function ScaleParty() {
  const [showModal, setShowModal] = useState(false)
  
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('https://localhost:44327/api/scaleparty')
        .then(res => {setList(res.data)})
  }, [])

  return (
    <>
      <SearchBar allData = {list} />
      <Button onClick={() => setShowModal(true)}>
        Show Modal
      </Button>
      <div>
        <ScalePartyModal show={showModal} onHide={() => setShowModal(false)} />
      </div>
    </>
    )
}
