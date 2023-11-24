import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ name, price, discount, image, rating, sale }) => {

    const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar key={index} className="star" color={index < rating ? '#ffc107' : '#e4e5e9'} />
    ));

    const discountPrice = price - (price * (discount / 100));

    return(
        <div className="product">
            {sale && <div className="sale-label">Sale</div>}
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="price-container">
                {discount > 0 && (
                    <p className="original-price">${price.toFixed(2)}</p>
                )}
                <p className="discount-price">${discountPrice.toFixed(2)}</p>
            </div>
            <div className="rating">{stars}</div>
            {sale ? (
                <button className="add-to-cart">Add to Cart</button>
            ) : (
                <button className="view-options">View Options</button>
            )}
        </div>
    );
};

export default Product;