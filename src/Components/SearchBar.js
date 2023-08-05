import React, { useState } from "react";

function SearchBar({list}) {
  
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
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={searchValue}
        />

        <table>
          <tr>
            <td>PartyID</td>
            <td>PartyName</td>
          </tr>
          {filteredData.map((p, index) => (
            <tr key={index}>
              <td>{p.PartyID}</td>
              <td>{p.PartyName}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default SearchBar;
