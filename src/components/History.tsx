//import './Cart.css';
import { useId } from 'react';
import { ListIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export function HistoryItem ({ name }: { name: string }) {
  return (
    <li>
      <div>
        <strong>{name}</strong>
      </div>
    </li>
  )
}

export function History () {
  const historyCheckboxId = useId();
  const buyHistory=['play','pc','xbox'];

  return (
    <>
      <label className='cart-button2' htmlFor={historyCheckboxId}>
        <ListIcon />
      </label>
      <input id={historyCheckboxId} type='checkbox' hidden />

      <aside className='cart2'>
        <   ul>
          {buyHistory.map((bh:string,index: number) => (
            <HistoryItem
                key={index}
                name={bh}
            />
          ))}
        </ul>
      </aside>
    </>
  )
}



