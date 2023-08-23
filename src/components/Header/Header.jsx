import React, { useState } from 'react';
import './Header.scss';
import { topHeaderIcons, middleHeaderOptions } from '../../constants/constants';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseMenu = () => {
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
      <section className="burgerAndSearch">
        <button
          type="button"
          onClick={handleOpenCloseMenu}
          onKeyDown={handleOpenCloseMenu}
        >
          <img
            className="burgerIcon"
            src="./burger-menu.svg"
            alt="menu"
          />
        </button>
        <SearchBar />
      </section>
      <ul className={`burgerOptions ${isOpen ? '' : 'hidden'}`}>
        {middleHeaderOptions.map((opt) => (
          <li className="option lato-bold" key={opt.id}>{opt.text}</li>
        ))}
      </ul>
      {/* <section className="bottom">
        <ul className="subsections">
          {bottomHeaderOptions.map((opt) => (
            <li key={opt.id} className="subsection">{opt.text}</li>
          ))}
        </ul>
      </section> */}

    </header>
  );
}
