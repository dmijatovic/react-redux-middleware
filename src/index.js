import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {
  createStore, combineReducers , 
  applyMiddleware , compose} from 'redux';
//import reducer from './store/reducers';
import { 
  loaderReducer, headerReducer,
  personsReducer 
} from './store/reducers';
//custom middleware

import {
  myLogger, myActionChanger, myAsyncAction 
} from './store/middleware';

import App from './App';
import './styles/index.scss';

let reducers = combineReducers({
  header: headerReducer,
  loader: loaderReducer,
  persons: personsReducer 
});

//store enhancers (Redux devtools and middleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const myStore = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(myLogger, myAsyncAction, myActionChanger)
  )
);

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>,
  document.getElementById('react-root')
)