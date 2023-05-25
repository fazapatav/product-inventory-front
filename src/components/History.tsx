import './History.css';
import { useId } from 'react';
import { ListIcon, ClearCartIcon } from './Icons';
import { useCart } from '../hooks/useCart';

export function HistoryItem ({ buy }: { buy: any }) {
  return (
    <li>
      <div>
        <strong>{buy.buyDate}</strong>
      </div>
    </li>
  )
}

export function History () {
  const historyCheckboxId = useId();
  const buyHistory=[
    {buyDate:'2023-04-20',product:[{image:"",price:100,quantity:1},{image:"",price:200,quantity:5}]},
    {buyDate:'2023-04-22',product:[{image:"",price:100,quantity:1},{image:"",price:200,quantity:5}]},
    {buyDate:'2023-04-24',product:[{image:"",price:100,quantity:1},{image:"",price:200,quantity:5}]},
  ];

  return (
    <>
      <label className='history-button' htmlFor={historyCheckboxId}>
        <ListIcon />
      </label>
      <input id={historyCheckboxId} type='checkbox' hidden />

      <aside className='history'>
        <ul>
          {buyHistory.map((bh:any,index: number) => (
            <HistoryItem
                key={index}
                buy={bh}
            />
          ))}
        </ul>
      </aside>
    </>
  )
}



