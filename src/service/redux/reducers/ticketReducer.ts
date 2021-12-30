import { Ticket } from '../../type';

interface StateTicket {
  tickets: Ticket[];
  load: boolean;
  booSort: boolean;
}

const init: StateTicket = {
  tickets: [],
  load: false,
  booSort: true,
};

export interface TicketFetch {
  type: 'FETCH_TICKET';
  tickets: Ticket[];
}

export interface TicketSort {
  type: 'AVI_BOO_TOKEN';
  booSort: boolean;
}

export interface TicketLoad {
  type: 'LOAD';
  load: boolean;
}

type TicketAction = TicketFetch | TicketSort | TicketLoad;

export function ticketReducer(state = init, action: TicketAction): StateTicket {
  switch (action.type) {
    case 'FETCH_TICKET':
      return { ...state, tickets: [...state.tickets, ...action.tickets] };
    case 'AVI_BOO_TOKEN':
      return { ...state, booSort: action.booSort };
    case 'LOAD':
      return { ...state, load: action.load };
    default:
      return state;
  }
}
