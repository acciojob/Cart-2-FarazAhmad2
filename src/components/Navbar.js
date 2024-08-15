import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();

  return (
    <nav>
      <h2>Shopping Cart</h2>
      <div id="nav-cart-item-count">
        Cart Items: {state.totalItems}
      </div>
    </nav>
  );
};

export default Navbar;
