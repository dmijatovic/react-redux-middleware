import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
//import reducer from './store/reducers';
import { 
  loaderReducer, headerReducer,
  personsReducer 
} from './store/reducers';


import App from './App';
import './styles/index.scss';

const myStore = createStore(
  combineReducers({
    header: headerReducer,
    loader: loaderReducer,
    persons: personsReducer 
  })
);

ReactDOM.render(
  <Provider store={myStore}>
    <App/>
  </Provider>,
  document.getElementById('react-root')
)