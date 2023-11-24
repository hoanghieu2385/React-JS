import React from 'react';

function Item ({ name, pic, price, rating}) {
    return (
        <section>
            <img className="item-picture" alt={name} src={pic}  />
            {/* link image hien thi */}
            <h3>{name}</h3>
            {/* them cua tung item */}
            Price: <span>${price}</span>
            {/* gia tien */}
            <br/>
            Rating: <span>{rating}</span>🌟
            {/* rating */}
        </section>
    )
}

export default Item;

