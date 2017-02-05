import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  if (action.type === FETCH_WEATHER) {
    // put fetched weather data from action and 
    // flatten old state array into new array
    return [ action.payload.data, ...state ]; // [ city weather data, city weather data, ... ]
  }

  return state;
}