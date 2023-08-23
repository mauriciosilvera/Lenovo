import React from 'react';
import './ProductCard.scss';

export default function ProductCard(props) {
  const {
    img, name, price, coupon, isDoorbuster,
  } = props;
  return (
    <article className="cardContainer">

      <img className="productImage" src={img} alt={name} />

      <div className="productInfo">
        <p className="productTitle lato-bold">
          {name}
        </p>
        <p className="productPrice">
          {price}
        </p>
        <p className="coupon">
          Use eCoupon:
          {' '}
          <span className="lato-bold">{coupon}</span>
        </p>
      </div>
      <button className="addToCardButton" type="button">Add to Cart</button>
    </article>
  );
}
