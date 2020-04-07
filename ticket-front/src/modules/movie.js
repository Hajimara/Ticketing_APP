import createRequestSaga, {
  createRequestActionTypes
} from "../lib/createRequestSaga";
import { createAction, handleActions } from "redux-actions";
import { moviesAPI } from "../lib/api/movie";
import { takeLatest } from "redux-saga/effects";

const MOVIE_INITIALIZE = "movie/MOVIE_INITIALIZE";
const MOVIE_LIST_INITIALIZE = "movie/MOVIE_LIST_INITIALIZE";

const [
  MOVIE_DATA,
  MOVIE_DATA_SUCCESS,
  MOVIE_DATA_FAILURE
] = createRequestActionTypes("movie/MOVIE_DATA");

const [
  MOVIE_CONCAT_DATA,
  MOVIE_CONCAT_DATA_SUCCESS,
  MOVIE_CONCAT_DATA_FAILURE
] = createRequestActionTypes("movie/MOVIE_CONCAT_DATA");

const [
  MOVIE_DATA_LIST,
  MOVIE_DATA_LIST_SUCCESS,
  MOVIE_DATA_LIST_FAILURE
] = createRequestActionTypes("movie/MOVIE_DATA_LIST");

const [
  MOVIE_DETAIL_DATA,
  MOVIE_DETAIL_DATA_SUCCESS,
  MOVIE_DETAIL_DATA_FAILURE
] = createRequestActionTypes("movie/MOVIE_DETAIL_DATA");

export const movieData = createAction(MOVIE_DATA, page => page);
export const movieDataList = createAction(MOVIE_DATA_LIST, page => page);
export const movieDetailData = createAction(MOVIE_DETAIL_DATA, id => id);
export const movieConcatData = createAction(MOVIE_CONCAT_DATA, (page) => (page));
export const movieInitialize = createAction(MOVIE_INITIALIZE);
export const movieListInitialize = createAction(MOVIE_LIST_INITIALIZE);

const movieDataSaga = createRequestSaga(MOVIE_DATA, moviesAPI.nowPlaying);
const movieDataListSaga = createRequestSaga(
  MOVIE_DATA_LIST,
  moviesAPI.nowPlaying
);
const movieConcatDataSaga = createRequestSaga(MOVIE_CONCAT_DATA,moviesAPI.nowPlaying);
const movieDetailDataSaga = createRequestSaga(
  MOVIE_DETAIL_DATA,
  moviesAPI.movieDetail
);

export function* movieSaga() {
  yield takeLatest(MOVIE_DATA, movieDataSaga);
  yield takeLatest(MOVIE_DATA_LIST, movieDataListSaga);
  yield takeLatest(MOVIE_CONCAT_DATA, movieConcatDataSaga);
  yield takeLatest(MOVIE_DETAIL_DATA, movieDetailDataSaga);
}

const initialState = {
  movieAllData: null,
  movieDetail: null,
  movieDataError: null,
  listPage: 0,
  more: true,
  listData: []
};

export default handleActions(
  {
    [MOVIE_CONCAT_DATA_SUCCESS]: (state,{payload:data})=>({
      ...state,
      listData: state.listData.concat(data),
      listPage: state.listPage + 1,
      more: state.listPage + 1 === data.page
    }),
    [MOVIE_CONCAT_DATA_FAILURE]: (state,{payload:error})=>({
      ...state,
      movieDataError: error
    }),
    [MOVIE_DATA_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      movieAllData: data
    }),
    [MOVIE_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      movieDataError: error
    }),
    [MOVIE_DATA_LIST_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      movieAllData: data,
      listPage: initialState.listPage + 1,
      more: initialState.listPage + 1 === data.page
    }),
    [MOVIE_DATA_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      movieDataError: error
    }),
    [MOVIE_DETAIL_DATA_SUCCESS]: (state, { payload: data }) => ({
      ...state,
      movieDetail: data
    }),
    [MOVIE_DETAIL_DATA_FAILURE]: (state, { payload: error }) => ({
      ...state,
      movieDataError: error
    }),
    [MOVIE_INITIALIZE]: state => {},
    [MOVIE_LIST_INITIALIZE]: state => ({
      ...state,
      movieAllData: null,
      movieDetail: null,
      listData: [],
      listPage: 0,
      more: true
    })
  },
  initialState
);
