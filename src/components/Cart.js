import React from 'react';

const Cart = ({ cart, removeFromCart, adjustQuantity }) => (
    <div className="container mx-auto p-4 text-yellow-50">
        <h2 className="text-2xl font-semibold mb-4 ">Your Cart</h2>
        {cart.length === 0 ? (
            <p>Your cart is empty</p>
        ) : (
            cart.map((item) => (
                <div key={item.id} className="border p-4 rounded shadow-md mb-4 flex justify-between items-center ">
                    <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p>${item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                        <div className="flex space-x-2 mt-2">
                            <button onClick={() => adjustQuantity(item.id, item.quantity - 1)} className="bg-gray-500 px-2 py-1 rounded hover:bg-gray-700">-</button>
                            <button onClick={() => adjustQuantity(item.id, item.quantity + 1)} className="bg-gray-500 px-2 py-1 rounded hover:bg-gray-700">+</button>
                        </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove</button>
                </div>
            ))
        )}
        <p className="text-xl font-bold mt-4">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
    </div>
);

export default Cart;
