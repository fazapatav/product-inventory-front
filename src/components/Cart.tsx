import './Cart.css';
import {CartItemProps} from '../types/Cart';
import { useId } from 'react';
import { CartIcon, ClearCartIcon,FinishBuyIcon} from './Icons';
import { useCart } from '../hooks/useCart';
import {payBuy} from '../api/cart';

export function CartItem ({ image, price, name, quantity, addToCart }:CartItemProps) {
  return (
    <li>
      <img
        src={image}
        alt={name}
      />
      <div>
        <strong>{name}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart () {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  
  const buy = async() =>{
    await payBuy(cart);
    alert("Compra finalizada");
    clearCart();
  }

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map((product:any) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        -
        <button onClick={buy}>
            <FinishBuyIcon/>
        </button>
      </aside>
    </>
  )
}



