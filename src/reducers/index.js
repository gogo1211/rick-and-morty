import { combineReducers } from 'redux';

import characterListReducer from './list';
import characterDetailReducer from './detail';

export default combineReducers({
  list: characterListReducer,
  detail: characterDetailReducer,
});
