import React from 'react';

function Item ({ name, pic, price, rating}) {
    return (
        <section>
            <img className="item-picture" alt={name} src={pic}  />
            <h3>{name}</h3>
            Price: <span>${price}</span>
            <br/>
            Rating: <span>{rating}</span>🌟
        </section>
    )
}

export default Item;

