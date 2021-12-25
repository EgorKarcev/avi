import { getHours, getMinutes } from 'date-fns';
import React from 'react';
import './ListItemAvi.scss';

const ListItemAvi = ({ ticket }) => {
  const { price, carrier } = ticket;
  const resoltTime = (data) => {
    const hour = getHours(data) >= 10 ? getHours(data) : `0${getHours(data)}`;
    const minute = getMinutes(data) >= 10 ? getMinutes(data) : `0${getMinutes(data)}`;
    return `${hour}:${minute}`;
  };
  const segment = ticket.segments.map((item) => {
    const { origin, date, destination, duration, stops } = item;
    const slovo = stops.length === 0 ? 'Без пересадок' : stops.length > 1 ? 'Пересадки' : 'Пересадка';
    const tranfer = stops.length === 0 ? null : stops.length;
    const hour = Math.floor(duration / 60);
    const minute = duration % 60;
    const time = new Date(Date.parse(date) + duration * 60 * 1000);
    const datas = new Date(date);
    return (
      <div className="info__avi" key={JSON.stringify(item)}>
        <div className="info__flay">
          <span>
            {origin} - {destination}
          </span>
          <span>
            {resoltTime(datas)} - {resoltTime(time)}
          </span>
        </div>
        <div className="info__time">
          <span>В пути</span>
          <span>
            {hour}ч {minute}м
          </span>
        </div>
        <div className="info__transfer">
          <span>
            {tranfer} {slovo}
          </span>
          <span> {stops.join(', ')} </span>
        </div>
      </div>
    );
  });
  return (
    <div className="item__avi">
      <div className="item__header">
        <div>{price}</div>
        <div>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt={carrier} />
        </div>
      </div>
      <div className="item__info">{segment}</div>
    </div>
  );
};

export default ListItemAvi;
