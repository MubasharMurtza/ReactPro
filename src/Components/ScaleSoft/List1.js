import React, { useState } from 'react';
import SearchListBar from './SearchListBar';

const List1 = ({initialData}) => {
 
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (searchTerm) => {
    // Filter the data based on the search term
    const filteredItems = initialData.filter((item) =>
      item.PartyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  return (
    <div>
      <h1>Search List Bar Example</h1>
      <SearchListBar data={filteredData} onSearch={handleSearch} />
    </div>
  );
};

export default List1;
