export const LOAD_LIST = '[Character List] Load list';
export const LOAD_LIST_SUCCESS = '[Character List] Load list success';
export const LOAD_LIST_FAILURE = '[Character List] Load list failure';
export const LOAD_DETAIL = '[Character Detail] Load detail';
export const LOAD_DETAIL_SUCCESS = '[Character Detail] Load detail success';
export const LOAD_DETAIL_FAILURE = '[Character Detail] Load detail FILURE';

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

export function loadDetail(id) {
  return {
    type: LOAD_DETAIL,
    payload: id,
  };
}

export function loadDetailSuccess(payload) {
  return {
    type: LOAD_DETAIL_SUCCESS,
    payload,
  };
}

export function loadDetailFailure(error) {
  return {
    type: LOAD_DETAIL_FAILURE,
    error,
  };
}
