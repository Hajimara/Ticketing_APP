import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import movie, { movieSaga } from './movie';
import ticket ,{ticketSaga}from './ticket';
import admin, {adminSaga} from './admin';
import payment, { paymentSaga } from "./payment";
import myHome, { myHomeSaga } from "./myHome";

const rootReducer = combineReducers({
    loading,
    auth,
    user,
    movie,
    ticket,
    admin,
    payment,
    myHome
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(),movieSaga(),adminSaga(),ticketSaga(),paymentSaga(),myHomeSaga()]);
}

export default rootReducer;
