import { call, put, takeLatest } from 'redux-saga/effects';
import {
  LOAD_LIST,
  loadListSuccess,
  loadListFailure,
  LOAD_DETAIL,
  loadDetailSuccess,
  loadDetailFailure,
} from '../store/actions';
import {
  loadCharacterList,
  loadCharacterDetail,
} from './apis';

function* loadList() {
  try {
    const data = yield call(loadCharacterList);
    yield put(loadListSuccess(data.results));
  } catch (error) {
    yield put(loadListFailure(error));
  }
}

function* loadDetail(action) {
  try {
    const data = yield call(loadCharacterDetail, action.payload);
    yield put(loadDetailSuccess(data));
  } catch (error) {
    yield put(loadDetailFailure(error));
  }
}

export default function* characterSaga() {
  yield takeLatest(LOAD_LIST, loadList);
  yield takeLatest(LOAD_DETAIL, loadDetail);
}
