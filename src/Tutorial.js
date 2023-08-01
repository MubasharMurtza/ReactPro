import React from "react";

function Tutorial() {
  const obj =[
   { id: 1, name: "Yousaf", age: 7 },
   { id: 2, name: "Haris", age: 5 },
   { id: 3, name: "Bilal", age: 4 },
   { id: 3, name: "NoorFatima", age: 3 }
]
  const bordered = { border: "1px solid black" };
  return (
    <>
      <div style={{textAlign:"center"}}>
        <table style={bordered}>
          <tr style={bordered}>
            <th style={bordered}>ID</th>
            <th style={bordered}>Name</th>
            <th style={bordered}>Age</th>
          </tr>
        {obj.map((object, index) => (
          <tr key={index}>
            <td style={bordered}>{object.id}</td>
            <td style={bordered}>{object.name}</td>
            <td style={bordered}>{object.age}</td>
          </tr>
        ))}
        </table>
      </div>
    </>
  );
}

export default Tutorial;
