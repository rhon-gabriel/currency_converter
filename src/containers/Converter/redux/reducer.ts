import {
  GET_CURRENCIES_START,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILURE,
  CONVERT_START,
  CONVERT_SUCCESS,
  CONVERT_FAILURE,
} from "./actionTypes";

import { CurrenciesActions, CurrenciesState } from "./types";

export const initialState: CurrenciesState = {
  loading: false,
  currencies: [],
  error: null,
  rates: [],
};

export default function converterReducer(
  state = initialState,
  action: CurrenciesActions
) {
  switch (action.type) {
    case GET_CURRENCIES_START:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        loading: false,
        currencies: action.payload.currencies,
        error: null,
      };
    case GET_CURRENCIES_FAILURE:
      return {
        ...state,
        loading: false,
        currencies: [],
        error: action.payload.error,
      };
    case CONVERT_START:
      return {
        ...state,
        loading: true,
      };
    case CONVERT_SUCCESS:
      return {
        ...state,
        loading: false,
        rates: action.payload.rates,
        error: null,
      };
    case CONVERT_FAILURE:
      return {
        ...state,
        loading: false,
        rates: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
}
