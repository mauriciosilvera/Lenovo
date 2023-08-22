import React from 'react';
import { categoriesOptions } from '../../constants/constants';
import './Categories.scss';

export default function Categories() {
  return (
    <section className="categoriesContainer">
      <ul className="categories">
        {categoriesOptions.map((categorie) => (
          <li className="categorie">
            {categorie.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
