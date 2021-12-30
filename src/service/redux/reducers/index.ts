import { combineReducers } from 'redux';
import { filterReducer as filter } from './fiterReducer';
import { ticketReducer as ticket } from './ticketReducer';

const rootReducer = combineReducers({ filter, ticket });

export default rootReducer;
