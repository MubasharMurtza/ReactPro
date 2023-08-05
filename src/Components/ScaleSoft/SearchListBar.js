import React, { useState } from 'react';

const SearchListBar = ({ data, onSearch }) => {
  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {data.map((item) => (
          <li key={item.PartyID}>{item.PartyID}-{item.PartyName}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchListBar;
