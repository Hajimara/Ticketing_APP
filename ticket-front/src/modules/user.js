import createRequestSaga, {
  createRequestActionTypes
} from "../lib/createRequestSaga";
import { takeLatest, call } from "redux-saga/effects";
import { createAction, handleActions } from "redux-actions";
import * as authApi from "../lib/api/auth";

const TEMP_SET_USER = "user/TEMP_SET_USER"; // 새로고침 이후 임시 로그인 처리
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
  "user/CHECK"
);
const LOGOUT = "user/LOGOUT";

const [USER_INFO, USER_INFO_SUCCESS, USER_INFO_FAILURE] = createRequestActionTypes(
  "user/USER_INFO"
);

const USER_INITIALIZE = 'payment/USER_INITIALIZE';

export const userInitalize = createAction(USER_INITIALIZE);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);
export const userInfo = createAction(USER_INFO,({user})=>({user}));

const checkSaga = createRequestSaga(CHECK, authApi.check);
const userInfoSaga = createRequestSaga(USER_INFO, authApi.userInfo);

function checkFailureSaga() {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    console.log("localStorage is not working");
  }
} // 함수내부에서 yield를 사용하지 않으므로 제너레이터함수 선언이 불필요

function* logoutSaga() {
  try {
    yield call(authApi.logout);
    localStorage.removeItem("user");
  } catch (error) {
    console.log(error);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(USER_INFO,userInfoSaga);
}

const initialState = {
  user: null,
  userInfo:null,
  cehckError: null
};

export default handleActions(
  {
    [LOGOUT]: (state) => ({
      ...state,
      user: null,
    }),
    [TEMP_SET_USER]: (state, { payload: user }) => ({
      ...state,
      user,
    }),
    [CHECK_SUCCESS]: (state, { payload: user }) => ({
      ...state,
      user,
      checkError: null,
    }),
    [CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      user: null,
      checkError: error,
    }),
    [USER_INFO_SUCCESS]: (state, { payload: userInfo }) => ({
      ...state,
      userInfo,
      checkError: null,
    }),
    [USER_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userInfo: null,
      checkError: error,
    }),
    [USER_INITIALIZE]: (state) => ({
      ...state,
      userInfo: null,
    }),
  },
  initialState
);
