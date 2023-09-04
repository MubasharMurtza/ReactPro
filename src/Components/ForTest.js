import React, { useState } from 'react'

export default function ForTest() {

    const [inputValue, setInputValue] = useState({
        PartyID:1,
        PartyName:"Mubashar"
    })
    const [valPartyID, setValPartyID] = useState()
    const PID = (e) => {
        setInputValue({...inputValue,PartyID:e.target.value})
    }
    console.log(inputValue)
    const PName = (e) => {}

  return (
    <>
        <input type='number'value={inputValue.PartyID} name='PartyID' onChange={PID} />
        <input type='text'value={inputValue.PartyName} name='PartyName' onChange={PName} />
    </>
  )
}
