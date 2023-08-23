import React from 'react';
import './SearchBar.scss';

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        type="text"
        placeholder="What are you looking for today?"
      />
      <div className="searchIcon">
        <img src="./search.svg" alt="search" />
      </div>
    </div>
  );
}
