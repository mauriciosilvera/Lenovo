import React from 'react';
import './DiscountsBanner.scss';

export default function DiscountsBanner() {
  return (
    <section className="discountsBanner">
      <p>
        SAVE UP TO 21% ON
        {' '}
        <span className="lato-black ">SELECT THINKPAD LAPTOPS </span>
        {' '}
        THROUGH NOVEMBER 11TH
        {' '}
        <span className="shopNow lato-bold">
          Shop Now
        </span>
        {' >'}
      </p>
    </section>
  );
}
