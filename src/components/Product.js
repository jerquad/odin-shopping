import { useState, useEffect } from 'react';

import Icon from '@mdi/react';
import { mdiStar, mdiStarHalf } from '@mdi/js';


function Product({thumbnail, title, rating, price, discount}) {
    function makeStarbar() {
        const starbar= [];
        for (let i = 0; i < Math.floor(rating); i++) {
            starbar.push((<Icon key={i} path={mdiStar} size={1} />));
        }
        if (rating % 1 >= .5) starbar.push(<Icon key={Math.floor(rating)} path={mdiStarHalf} size={1} />)
        return starbar;
    }

    function makePrice() {
        const discoDollar = Math.floor(price - (price / discount));
        const discoCents = Math.floor(100 *((price - (price / discount)) % 1));
        return (
            <div className='price-bar'>
                <span className='price super-text'>$</span>
                <span className='price'>{price >= 1 ? discoDollar : 0}</span>
                <span className='price super-text'>{discoCents >= 10 ? discoCents : discoCents * 10}</span>
                <span className='price-original'>{`($${Math.floor(price)}.${price % 1 === 0 ? '00' : price % 1})`}</span>
            </div>
            
        )
    }

    return (
        <div className='product-card'>
            <div className='product-icon'>
                <img src={thumbnail} alt='product thumbnail' />
            </div>
            <h3>{title}</h3>
            {makeStarbar()}
            {makePrice()}
            <button>add to cart</button>
        </div>
    )
}

export default Product;