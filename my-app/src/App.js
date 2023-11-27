// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { FaStar } from 'react-icons/fa';
import './css/styleShop.css';
// import './css/styleProduct.css'
import ShopList from './WebTuLam/ShopList';
import ProductList from './components/ProductList';


export default function MyApp() {
  return (
      <div className="App">
          <ShopList />
          {/* <ProductList /> */}
      </div>
  );
}
