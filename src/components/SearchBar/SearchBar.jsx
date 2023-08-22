import React from 'react';
import './SearchBar.scss';

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input className="searchInput" type="text" />
      <div className="searchIcon">
        <img src="./search.svg" alt="search" />
      </div>
    </div>
  );
}
