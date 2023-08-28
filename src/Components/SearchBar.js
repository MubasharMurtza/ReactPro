import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";

function SearchBar({ list, column }) {
  // const [EditModal, setEditModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
  };
  const filteredData = list.filter((lst) =>
    lst.PartyName.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchValue}
      />
      <Table className="table" table striped bordered hover size="sm">
        <thead>
        <tr>
          {column.map((c, index) => (
            <th key={index}>{c}</th>
          ))}
          <th>Edit</th>
          <th>Delete</th>
          </tr>
          </thead>
        <tbody>
          {filteredData.map((p, index) => (
            <tr key={index}>
              <td>{p.PartyID}</td>
              <td>{p.PartyName}</td>
              <td>
                <Button variant="info" onClick={}>Edit</Button>
              </td>
              <td>
                <Button variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default SearchBar;
