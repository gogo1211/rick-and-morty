export const LOAD_LIST = 'LOAD_LIST';
export const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS';
export const LOAD_LIST_FAILURE = 'LOAD_LIST_FAILURE';

export function loadList() {
  return {
    type: LOAD_LIST,
  };
}

export function loadListSuccess(payload) {
  return {
    type: LOAD_LIST_SUCCESS,
    payload,
  };
}

export function loadListFailure(error) {
  return {
    type: LOAD_LIST_FAILURE,
    error,
  };
}
