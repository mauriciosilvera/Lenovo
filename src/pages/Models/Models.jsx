import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import MerchBanner from '../../components/MerchBanner/MerchBanner';
import { orderFilters, priceFilters, products } from '../../constants/constants';
import './Models.scss';
import CheckboxFilter from '../../components/CheckboxFilter/CheckboxFilter';

export default function Models() {
  return (
    <section className="pageContent">
      <div className="sectionName">
        <span>Models</span>
      </div>

      <section className="sectionContent">
        <div className="desktopFilters">
          <CheckboxFilter />
        </div>
        <section className="productsContainer">
          <div className="resultsFilters">
            <p className="results">8 Matching results</p>
            <div className="filters">
              <select className="order" name="order">
                {orderFilters.map((filter) => (
                  <option
                    key={filter.id}
                    value={filter.value}
                  >
                    {filter.label}
                  </option>
                ))}
              </select>
              <select className="price" name="price">
                {priceFilters.map((filter) => (
                  <option
                    key={filter.id}
                    value={filter.value}
                  >
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <article className="products">
            {products.map((product) => (
              <ProductCard
                id={product.id}
                img={product.img}
                name={product.name}
                price={product.price}
                coupon={product.coupon}
                isDoorbuster={product.isDoorbuster}
              />
            ))}
          </article>
        </section>
      </section>

      <MerchBanner />
    </section>
  );
}
