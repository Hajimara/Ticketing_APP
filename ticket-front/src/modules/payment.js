import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as paymentAPI from '../lib/api/payment'
import { takeLatest } from 'redux-saga/effects';

const [
  PAYMENT_CONFIRM,
  PAYMENT_CONFIRM_SUCCESS,
  PAYMENT_CONFIRM_FAILURE,
] = createRequestActionTypes("payment/PAYMENT_CONFIRM");

const PAYMENT_INITIALIZE = 'payment/PAYMENT_INITIALIZE';

export const paymentConfirm = createAction(
  PAYMENT_CONFIRM,
  ({ ticketData, priceData, user }) => ({ ticketData, priceData, user })
);

export const paymentInitalize = createAction(PAYMENT_INITIALIZE);

const paymentConfirmSaga = createRequestSaga(PAYMENT_CONFIRM, paymentAPI.paymentConfirm);

export function* paymentSaga() {
    yield takeLatest(PAYMENT_CONFIRM, paymentConfirmSaga);
}

const initialState = {
    payment: null,
    result: null,
    error: null,
}

export default handleActions({
    [PAYMENT_CONFIRM_SUCCESS]: (state, {payload: result}) =>({
        ...state,
        result
    }),
    [PAYMENT_CONFIRM_FAILURE]: (state, {payload: error}) =>({
        ...state,
        error: error
    }),
    [PAYMENT_INITIALIZE]: (state) =>({
        ...state,
        payment: null,
        error: null
    }),
}, initialState)
