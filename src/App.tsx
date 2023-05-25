import React, { useState,useEffect } from 'react';
import { fetchProducts } from './api/products';
import { Products } from './components/Products';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';
import {History} from './components/History';

function App() {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    }
    getProducts();
  }, [])

  return (
    <CartProvider>
        <History/>
        <Cart/>
        <Products products={products}/>
    </CartProvider>
  );
}

export default App;
