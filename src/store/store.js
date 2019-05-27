import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import characterReducer from './reducer/index';
import characterSaga from '../middleware/saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(characterReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(characterSaga);

export default store;
