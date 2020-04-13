import createRequestSaga, {
  createRequestActionTypes,
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as adminAPI from "../lib/api/admin";
import { takeLatest } from "redux-saga/effects";
import produce from "immer";

const [
  ADMIN_INSERT_DATA,
  ADMIN_INSERT_DATA_SUCCESS,
  ADMIN_INSERT_DATA_FAILURE,
] = createRequestActionTypes("admin/ADMIN_INSERT_DATA");

const CHANGE_FIELD = "admin/CHANGE_FIELD";

export const adminInsertData = createAction(
  ADMIN_INSERT_DATA,
  ({ movieId, price, seat }) => ({ movieId, price, seat })
);

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  })
);

const adminInsertDataSaga = createRequestSaga(
  ADMIN_INSERT_DATA,
  adminAPI.dataPush
);

export function* adminSaga() {
  yield takeLatest(ADMIN_INSERT_DATA, adminInsertDataSaga);
}

const initialState = {
  admin: null,
  adminError: null,
  pushData: {
    movieId: "",
    price: "",
    totalSeat: "",
    finishSeat: "",
    movieDate: "",
  },
};

export default handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // state.register.username을 변경
      }),
    [ADMIN_INSERT_DATA_SUCCESS]: (state) => ({
      ...state,
      amdin: null,
    }),
    [ADMIN_INSERT_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      amdinError: error,
    }),
  },
  initialState
);
