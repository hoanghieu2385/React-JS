// import logo from './logo.svg';
import React from 'react';
// import './App.css';
import { FaStar } from 'react-icons/fa';
import './css/styleProductVip.css';
// import ShopList from './WebTuLam/ShopList';
import ProductList from './components/ProductVip/ProductListVip';
// import Game from './components/Caro';

export default function MyApp() {
    return (
        <div className="App">
            {/* <Game /> */}
            <ProductList />
        </div>
    );
}
