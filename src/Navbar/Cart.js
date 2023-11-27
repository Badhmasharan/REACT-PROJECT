import React from 'react';
import './Cart.css'; // Import the CSS file

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {cartItems && cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>${item.price}</span>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
