export const LOAD_DETAIL = 'LOAD_DETAIL';
export const LOAD_DETAIL_SUCCESS = 'LOAD_DETAIL_SUCCESS';
export const LOAD_DETAIL_FAILURE = 'LOAD_DETAIL_FAILURE';

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
