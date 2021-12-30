import React, { FC } from 'react';
import { Ticket } from '../../service/type';
import { resoltTime, hour, minute, time } from '../../service/utils';
import './ListItemAvi.scss';

interface ItemAviProps {
  ticket: Ticket;
}

const ListItemAvi: FC<ItemAviProps> = ({ ticket }) => {
  const { price, carrier } = ticket;

  const segment = ticket.segments.map((item) => {
    const { origin, date, destination, duration, stops } = item;
    const slovo = stops.length === 0 ? 'Без пересадок' : stops.length > 1 ? 'Пересадки' : 'Пересадка';
    const tranfer = stops.length === 0 ? null : stops.length;
    return (
      <div className="info__avi" key={JSON.stringify(item)}>
        <div className="info__flay">
          <span>
            {origin} - {destination}
          </span>
          <span>
            {resoltTime(new Date(date))} - {resoltTime(time(date, duration))}
          </span>
        </div>
        <div className="info__time">
          <span>В пути</span>
          <span>
            {hour(duration)}ч {minute(duration)}м
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
