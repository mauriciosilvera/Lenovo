import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import DiscountsBanner from './components/DiscountsBanner/DiscountsBanner';
import Sections from './components/Sections/Sections';
import Models from './pages/Models/Models';

function App() {
  return (
    <main>
      <Header />
      <DiscountsBanner />
      <Sections />
      <Models />
    </main>
  );
}

export default App;
