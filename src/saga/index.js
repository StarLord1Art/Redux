import { all } from "redux-saga/effects";
import { cashWatcher } from "./cashSaga";
import { customersWatcher } from "./customersSaga";

export function* rootWatcher() {
  yield all([cashWatcher(), customersWatcher()]);
}
