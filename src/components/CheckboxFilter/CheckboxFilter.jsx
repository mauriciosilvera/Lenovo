import React from 'react';
import { priceFilters } from '../../constants/constants';
import './CheckboxFilter.scss';

export default function CheckboxFilter() {
  return (
    <article className="desktopFilter">
      <div className="filterName">
        <span className="lato-bold">Price</span>
        <img src="/icon-arrow-up.svg" alt="arrow up" />
      </div>
      <div className="filterValues">
        {priceFilters.map((filter) => (
          <label htmlFor={filter.value}>
            {filter.label}
            {' '}
            {`(${filter.remaining})`}
            <input
              type="checkbox"
              id={filter.value}
              name={filter.value}
            />
            <span className="checkmark" />
          </label>
        ))}
      </div>
      <p className="showMore">See More</p>
    </article>
  );
}
