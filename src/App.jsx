import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import DiscountsBanner from './components/DiscountsBanner/DiscountsBanner';
// import Categories from './components/Categories/Categories';
import ProductCard from './components/ProductCard/ProductCard';
import MerchBanner from './components/MerchBanner/MerchBanner';
import { orderFilters, priceFilters, products } from './constants/constants';

function App() {
  return (
    <main>
      <Header />
      <DiscountsBanner />
      {/* <Categories /> */}
      <section className="pageContent">
        <p className="categorie">Models</p>
        <div className="resultsFilters">
          <span className="results">8 Matching results</span>
          <div className="filters">
            <select className="filter" name="order">
              {orderFilters.map((filter) => (
                <option value={filter.value}>{filter.label}</option>
              ))}
            </select>

            <select className="filter" name="price">
              {priceFilters.map((filter) => (
                <option value={filter.value}>{filter.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="products">
          {products.map((product) => (
            <ProductCard
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
