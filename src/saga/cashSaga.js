import { put, takeEvery } from "redux-saga/effects";
import { addCashAction, getCashAction } from "../store/cashReducer";
import { ASYNC_ADD_CASH, ASYNC_REQUEST_CASH } from "../store/cashReducer";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* addCashWorker() {
  yield delay(1000);
  yield put(addCashAction(100));
}

function* getCashWorker() {
  yield delay(1000);
  yield put(getCashAction(50));
}

export function* cashWatcher() {
  yield takeEvery(ASYNC_ADD_CASH, addCashWorker);
  yield takeEvery(ASYNC_REQUEST_CASH, getCashWorker);
}
