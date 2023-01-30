import { useState, useEffect } from 'react';
import Product from './Product';

function Shop({ cart }) {
    const [catalogue, setCatalogue] = useState([]);

    useEffect(() => {
        buildCatalogue();
    }, [])

    // useEffect(() => {
    //     console.log(catalogue);
    // }, [catalogue])

    const fetchItems = async () => {
        const fetchData = await fetch('https://dummyjson.com/products');
        return await fetchData.json();
    }

    const buildCatalogue = async () => {
        const products = await fetchItems();
        const newCatalogue = products.products.map(({images, title, rating, price, discountPercentage}) => 
            ({
                thumbnail: images[0],
                title: title,
                rating: rating,
                price: price,
                discount: discountPercentage
            }));
        setCatalogue(newCatalogue);
    }

    return (
        <div className='shop-area'>
            {catalogue.map((product, i) =>
                <Product 
                    key={i}
                    thumbnail={product.thumbnail}
                    title={product.title}
                    rating={product.rating}
                    price={product.price}
                    discount={product.discount}
                    cart={cart} />
            )}
        </div>
    )
}

export default Shop;