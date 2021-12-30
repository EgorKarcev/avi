import { getHours, getMinutes } from 'date-fns';

export const resoltTime = (data) => {
  const hour = getHours(data) >= 10 ? getHours(data) : `0${getHours(data)}`;
  const minute = getMinutes(data) >= 10 ? getMinutes(data) : `0${getMinutes(data)}`;
  return `${hour}:${minute}`;
};

export const hour = (duration) => Math.floor(duration / 60);
export const minute = (duration) => duration % 60;
export const time = (date, duration) => new Date(Date.parse(date) + duration * 60 * 1000);
