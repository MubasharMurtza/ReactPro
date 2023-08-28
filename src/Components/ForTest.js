import React, { useState } from 'react'

export default function ForTest() {

    const [inputValue, setInputValue] = useState({
        PartyID:1,
        PartyName:"Mubashar"
    })

    

  return (
    <>
        <input type='number'value="" name='PartyID' />
        <input type='number'value="" name='PartyName' />
    </>
  )
}
