import { applyMiddleware, createStore } from 'redux';
import thk from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thk));
export default store;
