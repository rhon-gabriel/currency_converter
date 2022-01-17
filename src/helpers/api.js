import axios from "axios";

export async function getCurrencies() {
  const key = process.env.REACT_APP_API_KEY;
  const options = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/list",
    headers: {
      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": key,
    },
  };
  return await axios.request(options);
}

export async function convertCurrencies(params) {
  const key = process.env.REACT_APP_API_KEY;
  const options = {
    method: "GET",
    url: "https://currency-converter5.p.rapidapi.com/currency/convert",
    params: params,
    headers: {
      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": key,
    },
  };
  return await axios.request(options);
}
