import { all } from "redux-saga/effects";
import converterSaga from "../containers/Converter/redux/saga";

export default function* rootSaga() {
  yield all([converterSaga()]);
}
