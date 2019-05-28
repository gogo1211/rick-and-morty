import * as ActionTypes from '../actions';

const initialState = {
  loading: false,
  list: [],
  error: '',
};

function characterListReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_LIST:
      return { ...state, loading: true };
    case ActionTypes.LOAD_LIST_SUCCESS:
      return { ...state, loading: false, list: action.payload };
    case ActionTypes.LOAD_LIST_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default characterListReducer;
