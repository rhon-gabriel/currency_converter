import {
  GET_CURRENCIES_START,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAILURE,
  CONVERT_START,
  CONVERT_SUCCESS,
  CONVERT_FAILURE,
} from "./actionTypes";

export interface Currencies {
  id: number;
  status: string;
}

export interface CurrenciesState {
  loading: boolean;
  currencies: Currencies[];
  error: string | null;
  rates: Rates[];
}

export interface GetCurrenciesSuccessPayload {
  currencies: Currencies[];
}

export interface GetCurrenciesFailurePayload {
  error: any;
}

export interface GetCurrenciesStart {
  type: typeof GET_CURRENCIES_START;
}

export type GetCurrenciesSuccess = {
  type: typeof GET_CURRENCIES_SUCCESS;
  payload: GetCurrenciesSuccessPayload;
};

export type GetCurrenciesFailure = {
  type: typeof GET_CURRENCIES_FAILURE;
  payload: GetCurrenciesFailurePayload;
};

export interface Rates {
  currency_name: string;
  rate: string;
  rate_for_amount: string;
}

export interface ConvertStartPayload {
  format: string | null;
  from: string | null;
  to: string | null;
  amount: string | null;
}

export interface ConvertSuccessPayload {
  rates: Rates[];
}

export interface ConvertFailurePayload {
  error: any;
}

export interface ConvertStart {
  type: typeof CONVERT_START;
  payload: ConvertStartPayload;
}

export type ConvertSuccess = {
  type: typeof CONVERT_SUCCESS;
  payload: ConvertSuccessPayload;
};

export type ConvertFailure = {
  type: typeof CONVERT_FAILURE;
  payload: ConvertFailurePayload;
};

export type CurrenciesActions =
  | GetCurrenciesStart
  | GetCurrenciesSuccess
  | GetCurrenciesFailure
  | ConvertStart
  | ConvertSuccess
  | ConvertFailure;
