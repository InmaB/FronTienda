import React, { useEffect, useState } from 'react';
import Item from './Item';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div>
            <h1 className="font-family-name text-4xl" style={{ marginTop: '15px' }}>Productos</h1>

            <div className="card-list">
                {products.map((product) => (
                    <Item
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        categoryName={product.category}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;
