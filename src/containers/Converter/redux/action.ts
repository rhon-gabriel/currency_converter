import {
  GET_CURRENCIES_START,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILURE,
  CONVERT_START,
  CONVERT_SUCCESS,
  CONVERT_FAILURE,
} from "./actionTypes";

import {
  GetCurrenciesStart,
  GetCurrenciesSuccess,
  GetCurrenciesSuccessPayload,
  GetCurrenciesFailure,
  GetCurrenciesFailurePayload,
  ConvertStart,
  ConvertSuccess,
  ConvertFailure,
  ConvertStartPayload,
  ConvertSuccessPayload,
  ConvertFailurePayload,
} from "./types";

export const getCurrenciesStart = (): GetCurrenciesStart => ({
  type: GET_CURRENCIES_START,
});

export const getCurrenciesSuccess = (
  payload: GetCurrenciesSuccessPayload
): GetCurrenciesSuccess => ({
  type: GET_CURRENCIES_SUCCESS,
  payload,
});

export const getCurrenciesFailure = (
  payload: GetCurrenciesFailurePayload
): GetCurrenciesFailure => ({
  type: GET_CURRENCIES_FAILURE,
  payload,
});

export const convertStart = (payload: ConvertStartPayload): ConvertStart => ({
  type: CONVERT_START,
  payload,
});

export const convertSuccess = (
  payload: ConvertSuccessPayload
): ConvertSuccess => ({
  type: CONVERT_SUCCESS,
  payload,
});

export const convertFailure = (
  payload: ConvertFailurePayload
): ConvertFailure => ({
  type: CONVERT_FAILURE,
  payload,
});
