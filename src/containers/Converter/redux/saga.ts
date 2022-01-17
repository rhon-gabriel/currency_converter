import { all, call, put, takeLatest } from "redux-saga/effects";

import {
  getCurrenciesFailure,
  getCurrenciesSuccess,
  convertFailure,
  convertSuccess,
} from "./action";
import { GET_CURRENCIES_START, CONVERT_START } from "./actionTypes";
import { getCurrencies, convertCurrencies } from "../../../helpers/api";

function* getCurrenciesSaga() {
  try {
    const {
      data: { currencies },
    } = yield call(getCurrencies);
    yield put(
      getCurrenciesSuccess({
        currencies: currencies,
      })
    );
  } catch (error) {
    yield put(
      getCurrenciesFailure({
        error: error,
      })
    );
  }
}

function* convertSaga(action: any) {
  try {
    const {
      data: { rates },
    } = yield call(convertCurrencies, action.payload);
    yield put(
      convertSuccess({
        rates: rates,
      })
    );
  } catch (error) {
    yield put(
      convertFailure({
        error: error,
      })
    );
  }
}

function* converterSaga() {
  yield all([
    takeLatest(GET_CURRENCIES_START, getCurrenciesSaga),
    takeLatest(CONVERT_START, convertSaga),
  ]);
}

export default converterSaga;
