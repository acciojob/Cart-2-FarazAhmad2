import React from 'react';

const CartItem = ({ item, incrementItem, decrementItem, removeItem }) => (
  <div>
    <h3>{item.name}</h3>
    <p id={`cart-item-price-${item.id}`}>${item.price}</p>
    <div>
      <button id={`decrement-btn-${item.id}`} onClick={() => decrementItem(item.id)}>-</button>
      <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
      <button id={`increment-btn-${item.id}`} onClick={() => incrementItem(item.id)}>+</button>
      <button onClick={() => removeItem(item.id)}>Remove</button>
    </div>
  </div>
);

export default CartItem;
