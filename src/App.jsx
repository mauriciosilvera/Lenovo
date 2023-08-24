import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import DiscountsBanner from './components/DiscountsBanner/DiscountsBanner';
import Categories from './components/Sections/Sections';
import ProductCard from './components/ProductCard/ProductCard';
import MerchBanner from './components/MerchBanner/MerchBanner';
import { orderFilters, priceFilters, products } from './constants/constants';

function App() {
  return (
    <main>
      <Header />
      <DiscountsBanner />
      <Categories />
      <section className="pageContent">
        <div className="sectionName">
          <span>Models</span>
        </div>

        <section className="sectionContent">
          <div className="desktopFilters">
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
    </main>
  );
}

export default App;
