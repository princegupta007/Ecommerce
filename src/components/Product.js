// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
    if (!product) return <div>Loading...</div>;

    return (
        <div className="border p-4 rounded shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-xl font-bold mb-4">${product.price}</p>
            <div className="flex justify-between items-center">
                <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
                <button onClick={addToCart} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
