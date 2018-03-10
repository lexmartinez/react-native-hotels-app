
import React, { Component } from 'react';
import Navigator from './config/navigation';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index';

const loggerMiddleware = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}