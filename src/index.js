import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { CartProvider } from './context/CartContext';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <CartProvider>
      <App />
    </CartProvider>,
  document.getElementById('root')
);
