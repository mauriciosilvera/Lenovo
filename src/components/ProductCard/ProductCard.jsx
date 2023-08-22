import React from 'react';
import './ProductCard.scss';

export default function ProductCard() {
  return (
    <article className="cardContainer">

      <img className="productImage" src="./notebook.png" alt="notebook" />

      <div className="productInfo">
        <p className="productTitle lato-bold">ThinkPad X! Carbon Gen 8</p>
        <p className="productPrice">$1,899.99</p>
        <p className="coupon">
          Use eCoupon:
          {' '}
          <span className="lato-bold">YOGAPRESALE8</span>
        </p>
      </div>
      <button className="addToCardButton" type="button">Add to Cart</button>
    </article>
  );
}
