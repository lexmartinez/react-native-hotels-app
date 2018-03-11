
import React, { Component } from 'react';
import Navigator from './config/navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    );
  }
}