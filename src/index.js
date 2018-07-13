import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, combineReducers , applyMiddleware} from 'redux';
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

//let middleware = ;


const myStore = createStore(
  reducers,
  applyMiddleware(myLogger, myAsyncAction, myActionChanger)
);

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>,
  document.getElementById('react-root')
)