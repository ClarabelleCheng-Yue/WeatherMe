import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

const store = createStore(
    reducers,
    undefined,
    compose(
      applyMiddleware(ReduxPromise),
      autoRehydrate()
    )
  );

persistStore(store);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.container'));