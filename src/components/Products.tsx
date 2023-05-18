import './Products.css';
import { AddToCartIcon } from './Icons';
import { Product, ProductList } from '../types/Product';

export function Products ({products}:ProductList){
    return (
        <main className='products'>
            <ul>
                {products.map(product =>(
                    <li key={product.id}>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                        />
                        <div>
                            <strong>{product.name}</strong> - $ {product.price}
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon/>
                            </button>                             
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    )
}