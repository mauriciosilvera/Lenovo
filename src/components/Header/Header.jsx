import React, { useState } from 'react';
import './Header.scss';
import { topHeaderIcons, middleHeaderOptions, bottomHeaderOptions } from '../../constants/constants';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenCloseCategories = () => {
    setIsOpen((prevValue) => !prevValue);
  };

  return (
    <header className="header">
      <section className="top">
        <img src="./lenovo.svg" alt="Lenovo logo" />
        <ul className="topHeaderIcons">
          {topHeaderIcons.map((icon) => (
            <li key={icon.id}>
              <img className="icon" src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ul>
      </section>
      <section className="middle">
        <ul className={`categories ${isOpen ? '' : 'hidden'}`}>
          {middleHeaderOptions.map((opt) => (
            <li className="categorie lato-bold" key={opt.id}>{opt.text}</li>
          ))}
        </ul>
        <button
          type="button"
          onClick={handleOpenCloseCategories}
          onKeyDown={handleOpenCloseCategories}
        >
          <img
            className="burgerIcon"
            src="./burger-menu.svg"
            alt="menu"
          />
        </button>

        <SearchBar />
      </section>
      {/* <ul className={`categories ${isOpen ? '' : 'hidden'}`}>
        {middleHeaderOptions.map((opt) => (
          <li className="categorie lato-bold" key={opt.id}>{opt.text}</li>
        ))}
      </ul> */}
      <section className="bottom">
        <ul className="subcategories">
          {bottomHeaderOptions.map((opt) => (
            <li key={opt.id} className="subcategorie">{opt.text}</li>
          ))}
        </ul>
      </section>
    </header>
  );
}
