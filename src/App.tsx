import React, { useState } from 'react';
import productStock from'./api/productStock.json';
import { Products } from './components/Products';
import { Cart } from './components/Cart';

function App() {
  const [products] = useState(productStock.products)
  return (
    <div>
        <Cart />
        <Products products={products}/>
    </div>

  );
}

export default App;
