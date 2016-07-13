import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import { Router, Route, hashHistory } from 'react-router'

import App from './components/app';
import About from './components/about'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
    </Router>
  </Provider>
  , document.querySelector('.container'));
