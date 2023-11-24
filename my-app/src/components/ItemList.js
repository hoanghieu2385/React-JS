import React from 'react';
import Item from './Item';

const items = [
    {
        name: 'Item 1',
        pic: 'https://picsum.photos/200/300',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 2',
        pic: 'https://picsum.photos/200/301',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 3',
        pic: 'https://picsum.photos/200/302',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 4',
        pic: 'https://picsum.photos/200/304',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 5',
        pic: 'https://picsum.photos/200/305',
        price: 100,
        rating: 4.5,
    },
    {
        name: 'Item 6',
        pic: 'https://picsum.photos/200/306',
        price: 100,
        rating: 4.5,
    },
];

export default function ItemList() {
    return (
        <div className="container p-5" style={{ background: '#EBC7D1' }}>
            {/* add mau */}
            <div className="row"> 
                {/* them cac thanh phan vao row de item hien hang ngang */}
                {items.map((item, index) => (
                    <div key={index} className="col-lg-4 col-md-12 mb-4">
                        {/* chia moi item 4/12 de hien thi 3 item 1 hang */}
                        <Item {...item} />
                        {/* hien thi cac thanh phan cua item ( name, anh, gia, rating) */}
                    </div>
                ))}
            </div>
        </div>
    );
}
