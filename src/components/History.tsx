import './History.css';
import { useId } from 'react';
import { ListIcon } from './Icons';
import {fetchBuys} from '../api/cart';
import React, { useState,useEffect } from 'react';

export function HistoryItem ({ buy }: { buy: any }) {
  return (
    <li>
      <div>
        <strong>{buy.date}</strong>
        <ul>
          {buy.products.map((item:any)=>(
              <li>
                <img
                  src={item.product.image}
                  alt={item.product.name}
                />
                <div>
                  <strong>{item.product.name}</strong> - ${item.product.price}
                </div>

                <footer>
                  <small>
                    Qty: {item.quantity}
                  </small>
                </footer>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function History () {
  const historyCheckboxId = useId();
  const [historyBuys,setHistoryBuys] = useState([]);

  useEffect(() => {
    const getHistoryBuys = async () => {
      const history = await fetchBuys();
      console.log('FAZ buys: ',history)
      setHistoryBuys(history);
    }
    getHistoryBuys();
  }, []);


  return (
    <>
      <label className='history-button' htmlFor={historyCheckboxId}>
        <ListIcon />
      </label>
      <input id={historyCheckboxId} type='checkbox' hidden />
      <aside className='history'>
        <strong>Lista de compras</strong>
        <ul>
          {historyBuys.map((bh:any,index: number) => (
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



