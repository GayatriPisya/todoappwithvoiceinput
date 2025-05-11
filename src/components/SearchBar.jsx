// components/SearchBar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="input-group w-50">
      <input
        type="text"
        className="form-control"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <span className="input-group-text">
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </div>
  );
};

export default SearchBar;
