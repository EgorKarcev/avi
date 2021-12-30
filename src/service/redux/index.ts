import { applyMiddleware, createStore } from 'redux';
import thk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thk));
export type RootState = ReturnType<typeof store.getState>;

export default store;
