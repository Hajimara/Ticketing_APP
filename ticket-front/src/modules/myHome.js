import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as userApi from "../lib/api/user";
import { takeLatest } from 'redux-saga/effects';

const [
  MYHOME_GET_DATA,
  MYHOME_GET_DATA_SUCCESS,
  MYHOME_GET_DATA_FAILURE,
] = createRequestActionTypes("myHome/MYHOME_GET_DATA");

export const myHomeGetData = createAction(
  MYHOME_GET_DATA,
  ({user,pagination }) => ({ user,pagination })
);

const myHomeGetDataSaga = createRequestSaga(
  MYHOME_GET_DATA,
  userApi.getUserTicket
);

export function* myHomeSaga() {
  yield takeLatest(MYHOME_GET_DATA, myHomeGetDataSaga);
}

const initialState = {
  userTicket: null,
  error: null,
};

export default handleActions(
  {
    [MYHOME_GET_DATA_SUCCESS]: (state, { payload: userTicket }) => ({
      ...state,
      userTicket,
    }),
    [MYHOME_GET_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);
