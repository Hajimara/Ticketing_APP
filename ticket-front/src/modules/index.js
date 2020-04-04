import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import movie, { movieSaga } from './movie';

const rootReducer = combineReducers({
    loading,
    auth,
    user,
    movie
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(),movieSaga()]);
}

export default rootReducer;
