import { useState, useEffect } from 'react';

function Shop() {
    const [catalogue, setCatalogue] = useState([]);

    useEffect(() => {
        buildCatalogue();
    }, [])

    useEffect(() => {
        console.log(catalogue)
    }, [catalogue]);

    const fetchItems = async () => {
        const fetchData = await fetch('https://dummyjson.com/products');
        return await fetchData.json();
    }

    const buildCatalogue = async () => {
        const products = await fetchItems();
        // console.log(products);
        const newCatalogue = products.products.map(({thumbnail, title, rating, price, discountPercentage}) => 
            ({
                thumbnail: thumbnail,
                title: title,
                rating: rating,
                price: price,
                discount: discountPercentage
            }));
        setCatalogue(newCatalogue);
    }

    return (
        <h1>THIS IS SHOP</h1>
    )
}

export default Shop;