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
        <div className="categorieName">
          <span>Models</span>
        </div>
        <div className="resultsFilters">
          <p className="results">8 Matching results</p>
          <div className="filters">
            <select className="filter" name="order">
              {orderFilters.map((filter) => (
                <option
                  key={filter.id}
                  value={filter.value}
                >
                  {filter.label}
                </option>
              ))}
            </select>
            <select className="filter" name="price">
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
        <div className="products">
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
        </div>
        <MerchBanner />
      </section>
    </main>
  );
}

export default App;
