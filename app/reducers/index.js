import { combineReducers } from 'redux';
import cities from './CitiesReducer';
import hotels from './HotelsReducer';
import detail from './DetailReducer';

export default combineReducers({ cities, hotels, detail });