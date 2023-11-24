// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa';
// import PricingPage from './components/PricingPage';
// import StarVip from './components/StarRate';
import ProductList from './components/ProductList';
import './css/style.css';


export default function MyApp() {
  return (
      <div className="App">
          <ProductList />
      </div>
  );
}
