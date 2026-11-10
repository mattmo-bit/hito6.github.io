import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { CartProvider } from './context/CartContext'; // 👈 Importar el proveedor
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider> {/* 👈 Envolver la aplicación aquí */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);