import React, { useState } from 'react';
import productStock from'./api/productStock.json';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';

function App() {
  const [products] = useState(productStock.products)
  return (
    <CartProvider>
        <Cart />
        <Products products={products}/>
    </CartProvider>
  );
}

export default App;
