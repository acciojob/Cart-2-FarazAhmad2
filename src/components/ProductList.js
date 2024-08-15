import React from 'react';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const { state, dispatch } = useCart();

  const incrementItem = (id) => {
    dispatch({ type: 'INCREMENT_ITEM', payload: { id } });
  };

  const decrementItem = (id) => {
    dispatch({ type: 'DECREMENT_ITEM', payload: { id } });
  };

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div id="cart-items-list">
      {state.cart.length > 0 ? (
        state.cart.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p id={`cart-item-price-${item.id}`}>${item.price}</p>
            <div>
              <button id={`decrement-btn-${item.id}`} onClick={() => decrementItem(item.id)}>-</button>
              <span id={`cart-amount-${item.id}`}>{item.quantity}</span>
              <button id={`increment-btn-${item.id}`} onClick={() => incrementItem(item.id)}>+</button>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          </div>
        ))
      ) : (
        <p>Cart is currently empty</p>
      )}
      <button id="clear-all-cart" onClick={clearCart}>Clear Cart</button>
      <div id="cart-total-amount">Total: ${state.totalAmount}</div>
    </div>
  );
};

export default ProductList;
