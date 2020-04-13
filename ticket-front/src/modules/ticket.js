import createRequestSaga, { createRequestActionTypes } from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import * as ticketAPI  from "../lib/api/ticket";
import { takeLatest } from 'redux-saga/effects';

const [
  STATE_CHECK,
  STATE_CHECK_FAILURE,
] = createRequestActionTypes("ticket/STATE_CHECK");

const [
  TICKET_SEAT_DATA,
  TICKET_SEAT_DATA_SUCCESS,
  TICKET_SEAT_DATA_FAILURE,
] = createRequestActionTypes("ticket/TICKET_SEAT_DATA");

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
    [TICKET_SEAT_DATA_SUCCESS]: (state, {payload: data}) => ({
      ...state,
      seatData: data
    }),
    [TICKET_SEAT_DATA_FAILURE]: (state, {payload: error})=> ({
      ...state,
      ticketError: error
    })
  },
  initialState
);