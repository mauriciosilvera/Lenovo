import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
// import DiscountsBanner from './components/DiscountsBanner/DiscountsBanner';
// import Categories from './components/Categories/Categories';
import ItemCard from './components/ProductCard/ProductCard';
import MerchBanner from './components/MerchBanner/MerchBanner';

function App() {
  return (
    <main>
      <Header />
      {/* <DiscountsBanner />
      <Categories /> */}
      <section className="pageContent">
        <p className="categorie">Models</p>
        <div className="resultsFilters">
          <span className="results">8 Matching results</span>
          <div className="filters">
            <button type="button">Filtros</button>
            <button type="button">Ordernar</button>
          </div>
        </div>
        <div className="products">
          <ItemCard />
          <ItemCard />
        </div>
        <MerchBanner />
      </section>
    </main>
  );
}

export default App;
