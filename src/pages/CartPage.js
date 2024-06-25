// src/pages/CartPage.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, adjustQuantity } from '../features/cart/cartSlice';

const CartPage = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleQuantityChange = (id, quantity) => {
        dispatch(adjustQuantity({ id, quantity }));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
            {cart.length === 0 ? (
                <div>Your cart is empty.</div>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p>${item.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                    className="w-16 p-1 border rounded mr-4"
                                />
                                <button
                                    onClick={() => handleRemoveFromCart(item.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
