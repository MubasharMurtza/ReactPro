import React, { useState } from 'react';
import Table from 'react-bootstrap/esm/Table';

const SearchBar = ({allData}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (query) => {
    const filtered = allData.filter((item) =>
      item.PartyName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder="Search..."
      />
      <Table>
        <tr>
          <th>PartyID</th>
          <th>PartyName</th>
        </tr>
        {filteredData.map((pl, index) => (
          <tr key={index}>
              <td>{pl.PartyID}</td>    
              <td>{pl.PartyName}</td>    
          </tr>
          ))}
      </Table>
    </div>
  );
};

export default SearchBar;
