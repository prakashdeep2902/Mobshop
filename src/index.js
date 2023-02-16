import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ProductState from './context/ProductState';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductState>
      <App />
    </ProductState>

  </React.StrictMode>
);


