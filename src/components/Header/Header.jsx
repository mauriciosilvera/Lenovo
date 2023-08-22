import React from 'react';
import './Header.scss';
import { topHeaderIcons, bottomHeaderOptions } from '../../constants/constants';
import SearchBar from '../SearchBar/SearchBar';

export default function Header() {
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
        <img src="./burger-menu.svg" alt="menu" />
        <SearchBar />
      </section>
      <section className="bottom">
        <ul className="subsections">
          {bottomHeaderOptions.map((opt) => (
            <li key={opt.id} className="subsection">{opt.text}</li>
          ))}
        </ul>
      </section>
    </header>
  );
}
