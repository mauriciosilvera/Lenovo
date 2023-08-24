import React from 'react';
import './ProductCard.scss';

export default function ProductCard(props) {
  const {
    img, name, price, coupon, isDoorbuster, id,
  } = props;
  return (
    <article key={id} className="cardContainer">
      <section className="labels">
        <label className={`doorbuster lato-bold ${!isDoorbuster ? 'hidden' : ''} `}>
          DOORBUSTER
        </label>
      </section>
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
      <button className="addToCartButton" type="button">Add to Cart</button>
    </article>
  );
}
