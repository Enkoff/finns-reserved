import { combineReducers, createStore, applyMiddleware } from 'redux';
import { reservationReducer } from './reservationReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    reservations: reservationReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));