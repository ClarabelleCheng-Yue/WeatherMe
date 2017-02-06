import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import { CLEAR_WEATHER } from '../actions/index';

const appReducer = combineReducers({
  weather: WeatherReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_WEATHER) {
    state = undefined;
  }

  return appReducer(state, action);
}

export default rootReducer;