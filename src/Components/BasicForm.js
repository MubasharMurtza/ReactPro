import React, { useState } from 'react'

function BasicForm() {

  const [count, setCount] = useState(0)
    const counting = () => {
      setCount(count + 1)
    }
  return (
    <div>
      <label>{count}</label>
      <button onClick={counting}>Click then Count</button>
    </div>
  )
}

export default BasicForm