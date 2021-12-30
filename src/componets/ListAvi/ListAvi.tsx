import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Spin } from 'antd';
import { AviBoo } from '../../service/redux/action';
import ListItemAvi from '../ListItemAvi/ListItemAvi';
import 'antd/dist/antd.css';
import './ListAvi.scss';
import useTypeSelector from '../../service/redux/HookRedux/useTypeSelector';

const pageSize = 5;

const ListAvi = () => {
  const {
    ticket: { booSort, tickets, load },
    filter: { filter },
  } = useTypeSelector((state) => state);

  const [lastIdx, setLastIdx] = useState(pageSize);

  const distpath = useDispatch();
  const items = booSort
    ? tickets.sort((prev: { price: number }, next: { price: number }) => prev.price - next.price)
    : tickets.sort(
        (prev: { segments: { duration: number }[] }, next: { segments: { duration: number }[] }) =>
          prev.segments[0].duration - next.segments[0].duration,
      );

  const filtering = (): any => {
    const { booAll } = filter;
    const massFilter = Object.entries(filter);
    const itemssss = massFilter.filter((el) => el[1] === true);
    let resolt;
    if (booAll) {
      resolt = items;
    } else if (!booAll) {
      if (itemssss.length <= 4 && itemssss.length > 0) {
        resolt = itemssss
          .map((seg) => {
            return items.filter((elem: { segments: { stops: string | any[] }[] }) => {
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
      } else if (itemssss.length === 0) {
        resolt = 'There are no tickets for the specified filters';
      }
    }
    return resolt;
  };
  const sort = (boo: boolean) => {
    distpath(AviBoo(boo));
  };
  const but =
    load === true ? (
      <button type="button" className="button__avi" onClick={() => setLastIdx(lastIdx + pageSize)}>
        Load more
      </button>
    ) : (
      <Spin size="large" />
    );

  const el =
    typeof filtering() === 'string' ? (
      <div className="dont__ticket">{filtering()}</div>
    ) : (
      filtering()
        .slice(0, lastIdx)
        .map((ticket: any) => {
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
          The fastest ticket
        </button>
        <button type="button" className="button__avi" onClick={() => sort(true)}>
          The cheapest ticket
        </button>
      </div>
      <div>
        <ul>{el}</ul>
        {Array.isArray(el) && el.length ? but : null}
      </div>
    </div>
  );
};

export default ListAvi;
