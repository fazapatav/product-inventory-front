import './Products.css';
import { AddToCartIcon,RemoveFromCartIcon } from './Icons';
import { Product, ProductList } from '../types/Product';
import { useCart } from '../hooks/useCart';

export function Products ({products}:ProductList){
    const { addToCart, removeFromCart, cart } = useCart();

    const checkProductInCart = (product:Product) => {
        return cart.some((item:any) => item.id === product.id)
      };
    return (
        <main className='products'>
            <ul>
                {products.map(product =>{
                  const isProductInCart = checkProductInCart(product)
                  return (
                    <li key={product.id}>
                      <img
                        src={product.image}
                        alt={product.name}
                      />
                      <div>
                        <strong>{product.name}</strong> - ${product.price}
                      </div>
                      <div>
                        <button
                          style={{ backgroundColor: isProductInCart ? 'green' : '#d8971e' }} onClick={() => {
                            isProductInCart
                              ? removeFromCart(product)
                              : addToCart(product)
                          }}
                        >
                          {
                            isProductInCart
                              ? <RemoveFromCartIcon />
                              : <AddToCartIcon />
                          }
                        </button>
                      </div>
                    </li>
                  )
                })}
          </ul>
      </main>
    )
}