import axios from 'axios';
import { persistStore } from 'redux-persist';
const ROOT_URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'; 

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const CLEAR_WEATHER = 'CLEAR_WEATHER';

export function fetchWeather(location) {
  const url = `${ROOT_URL}${encodeURI(location)}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;

  const request = axios.get(url)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      console.log(error);
      return;
    });

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

export function clearWeather() {
  return {
    type: CLEAR_WEATHER
  };
}