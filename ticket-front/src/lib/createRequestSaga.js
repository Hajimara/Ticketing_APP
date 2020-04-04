import { call, put } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/loading";

export const createRequestActionTypes = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  // console.log(`1. type -> ${type}  2. request ${request}`);
  return function*(action) { 
    yield put(startLoading(type)); //로딩 시작
    try {
      const response = yield call(request, action.payload);
      // console.log(`3. action -> ${action}  4. action.payload ${action.payload}`);
      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response
      });
      console.log(response.data);
    } catch (error) {
      yield put({
        type: FAILURE,
        payload: error,
        error: true
      });
    }
    yield put(finishLoading(type)); // 로딩끝
  };
}
