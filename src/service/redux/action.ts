import { Dispatch } from 'redux';
import fetchAvi from '../fetchAvi';
import { Ticket } from '../type';
import {
  FilterAllAction,
  FilterAllBigAction,
  FilterNoneAction,
  FilterOneAction,
  FilterThreeAction,
  FilterTwoAction,
} from './reducers/fiterReducer';
import { TicketFetch, TicketLoad, TicketSort } from './reducers/ticketReducer';

export const AviTicket = (tickets: Ticket[]): TicketFetch => ({ type: 'FETCH_TICKET', tickets });
export const AviBoo = (booSort: boolean): TicketSort => ({ type: 'AVI_BOO_TOKEN', booSort });
export const AviTransferAll = (booAll: boolean): FilterAllAction => ({ type: 'FIlTER_ALL', booAll });
export const AviTransferAllBig = (booAll: boolean): FilterAllBigAction => ({ type: 'FIlTER_ALL_BIG', booAll });
export const AviTransferNone = (booNone: boolean): FilterNoneAction => ({ type: 'FIlTER_NONE', booNone });
export const AviTransferOne = (booOne: boolean): FilterOneAction => ({ type: 'FIlTER_ONE', booOne });
export const AviTransferTwo = (booTwo: boolean): FilterTwoAction => ({ type: 'FIlTER_TWO', booTwo });
export const AviTransferThree = (booThree: boolean): FilterThreeAction => ({ type: 'FIlTER_THREE', booThree });
export const loader = (load: boolean): TicketLoad => ({ type: 'LOAD', load });

export const loadTick = () => async (dispath: Dispatch<TicketFetch | TicketLoad>) => {
  const id = await fetchAvi.getApi().then((res) => res.searchId);
  let stop = false;
  while (stop === false) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const resTick = await fetchAvi.getTicket(id).then((res) => res);
      stop = resTick.stop;

      dispath(AviTicket(resTick.tickets));
    } catch (err) {
      //
    }
  }
  dispath(loader(stop));
};
