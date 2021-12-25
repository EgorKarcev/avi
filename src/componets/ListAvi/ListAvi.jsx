import React,{ useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spin } from 'antd'
import { AviBoo } from '../../service/action';
import ListItemAvi from '../ListItemAvi/ListItemAvi';
import 'antd/dist/antd.css'
import './ListAvi.scss';


const pageSize = 5

const ListAvi = () => {

  const booSort = useSelector((state) => state.booSort);
  const tickets = useSelector((state) => state.tickets);
  const filterSt = useSelector((state) => state.filter);
  const load = useSelector((state)=> state.load)
  const [lastIdx , setLastIdx] = useState(pageSize)

  

  const distpath = useDispatch();
  const items = booSort
    ? tickets.sort((prev, next) => prev.price - next.price)
    : tickets.sort((prev, next) => prev.segments[0].duration - next.segments[0].duration);

  const filtering = () => {
    const { booAll } = filterSt;

    const massFil = Object.entries(filterSt);
    const itemssss = massFil.filter((el) => el[1] === true);
    let gut;
    if (booAll === true) {
      gut = items;
    } else if (booAll === false) {
      if (itemssss.length <= 4 && itemssss.length > 0){
      gut = itemssss
        .map((seg) => {
          return items.filter((elem) => {
            switch (seg[0]) {
              case 'booNone':
                return elem.segments[0].stops.length === 0;
              case 'booOne':
                return elem.segments[0].stops.length === 1;
              case 'booTwo':
                return elem.segments[0].stops.length === 2;
              case 'booThree':
                return elem.segments[0].stops.length === 3;
              default:
                return items;
            }
          });
        })
        .flat();
      }
      else if(itemssss.length === 0) {gut ='Нету билетов'}
    }

    return gut;
  };
  const sort = (boo) => {
    distpath(AviBoo(boo));
  };
  const but = load === true? <button type="button" className="button__avi" onClick={() => setLastIdx(lastIdx + pageSize)} >Ещё ...</button>: <Spin size='large' />


  const el =
    typeof filtering() === 'string' ? (
      <div>{filtering()}</div>
    ) : (
      filtering()
        .slice(0, lastIdx)
        .map((ticket) => {
          return (
            <li key={JSON.stringify(ticket)}>
              <ListItemAvi ticket={ticket} />
            </li>
          );
        })
    );

  return (
    <div className="list__avi">
      <div className="group__button">
        <button type="button" className="button__avi" onClick={() => sort(false)}>
          Самый быстрый
        </button>
        <button type="button" className="button__avi" onClick={() => sort(true)}>
          Самый дешёвый
        </button>
      </div>
      <div>
        <ul>{el}</ul>
        {but}

        
      </div>
    </div>
  );
};

export default ListAvi;
