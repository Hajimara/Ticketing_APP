import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as ticketAPI  from "../lib/api/ticket";
import { takeLatest } from 'redux-saga/effects';


const [
  TICKET_INITIALIZE,
] = createRequestActionTypes("ticket/TICKET_INITIALIZE");

const [
  STATE_CHECK,
  STATE_CHECK_FAILURE,
] = createRequestActionTypes("ticket/STATE_CHECK");

const [
  PRICE_CHECK,
  PRICE_CHECK_FAILURE,
] = createRequestActionTypes("ticket/PRICE_CHECK");

const [
  TICKET_SEAT_DATA,
  TICKET_SEAT_DATA_SUCCESS,
  TICKET_SEAT_DATA_FAILURE,
] = createRequestActionTypes("ticket/TICKET_SEAT_DATA");

export const ticketInitalize = createAction(TICKET_INITIALIZE);
export const stateCheck = createAction(
         STATE_CHECK,
         ({
           selectMovieItem: movieId,
           selectTheatreItem: theatre,
           selectTheatreDetailItem: theatreDetail,
           selectDateItem: ticketDate,
           selectEndTime: endTime,
           coverImage: image,
           coverTitle: title,
           price,
           runtime,
           managementItem
         }) => ({
           movieId,
           theatre,
           theatreDetail,
           ticketDate,
           endTime,
           image,
           title,
           price,
           runtime,
           managementItem
         })
       );
       

export const priceCheck = createAction(
  PRICE_CHECK,
  ({ peopleCounter, selectSeat, finishPrice }) => ({
    peopleCounter,
    selectSeat,
    finishPrice,
  })
);

export const ticketSeatData = createAction(TICKET_SEAT_DATA, selectMovieItem =>selectMovieItem);

const ticketSeatDataSaga = createRequestSaga(TICKET_SEAT_DATA, ticketAPI.movieId);

export function* ticketSaga(){
  yield takeLatest(TICKET_SEAT_DATA,ticketSeatDataSaga);
}

const initialState = {
    ticketData: null,
    seatData: null,
    priceData:null,
    ticketError: null
}

export default handleActions(
  {
    [STATE_CHECK]: (state, { payload: data }) => ({
      ...state,
      ticketData: data,
    }),
    [STATE_CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      ticketError: error,
    }),
    [PRICE_CHECK]: (state, { payload: data }) => ({
      ...state,
      priceData: data,
    }),
    [PRICE_CHECK_FAILURE]: (state, { payload: error }) => ({
      ...state,
      ticketError: error,
    }),
    [TICKET_SEAT_DATA_SUCCESS]: (state, {payload: data}) => ({
      ...state,
      seatData: data
    }),
    [TICKET_SEAT_DATA_FAILURE]: (state, {payload: error})=> ({
      ...state,
      ticketError: error
    }),
    [TICKET_INITIALIZE]: (state)=> ({
      ticketData: null,
      seatData: null,
      priceData:null,
      ticketError: null
    })
  },
  initialState
);