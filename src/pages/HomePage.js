// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsAsync } from '../features/products/productsSlice';
import Product from '../components/Product';
import { addToCart } from '../features/cart/cartSlice';

const HomePage = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductsAsync());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading products.</div>;
    }

    return (
        <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={() => dispatch(addToCart(product))} />
            ))}
        </div>
    );
};

export default HomePage;
