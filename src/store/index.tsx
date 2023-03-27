import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const rootReducer = combineReducers(reducers); //передали сюда объект reducers

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof store.getState>;
//тип состояния; он будет знать о типах и состоянии всех редьюсеров

export type AppDispatch = typeof store.dispatch;
