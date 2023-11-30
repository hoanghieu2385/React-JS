import React, { useState } from "react";
import Product from './ProductVip';
import Cart from "./Cart";
import products from '../../data/products';

const ProductList = () => {
    // State để lưu trữ giỏ hàng
    const [cartItems, setCartItems] = useState([]);

    // Hàm để thêm sản phẩm vào giỏ hàng
    const addToCart = (product) => {
        // Kiểm tra sản phẩm đõ có trong giỏ hàng chưa 
        const existingProduct = cartItems.find((item) => item.name === product.name);

        // Nếu đã có thì tăng số lượng lên 1
        if (existingProduct) {
            const updatedCart = cartItems.map((item) =>
                item.name === product.name ? {...item, quantity: item.quantity + 1} : item);
        
        setCartItems(updatedCart);
    } else {
        // Nếu chưa có trong giỏ hàng, thêm mới vào với số lượng là 1
        setCartItems([...cartItems, {...product, quantity: 1}]);
    }
};


    return (
        <div>
            {/* Giao diện danh sách sản ohẩm */}
            <div className="product-list">
                {products.map((product, index) =>(
                    <Product key={index} {...product} addToCart={addToCart} cartItems={cartItems} /> 
                ))}
            </div>
            
            {/* Giao diện giỏ hàng */}
            <Cart cartItems={cartItems} />
        </div>
    )
}

export default ProductList;