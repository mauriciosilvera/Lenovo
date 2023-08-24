import React from 'react';
import { sections } from '../../constants/constants';
import './Sections.scss';

export default function Sections() {
  return (
    <section className="sectionsContainer">
      <ul className="sections">
        {sections.map((section) => (
          <li key={section.id} className="section">
            {section.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
