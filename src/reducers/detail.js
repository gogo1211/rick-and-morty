import * as ActionTypes from '../actions';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

function characterDetailReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOAD_DETAIL:
      return { ...state, loading: true, data: {} };
    case ActionTypes.LOAD_DETAIL_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case ActionTypes.LOAD_DETAIL_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default characterDetailReducer;
