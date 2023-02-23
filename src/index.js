import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductState from './context/ProductState';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductState>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>

    </ProductState>

  </React.StrictMode>
);


