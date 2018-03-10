import { combineReducers } from 'redux';
import cities from './CitiesReducer';
import hotels from './HotelsReducer';

export default combineReducers({ cities, hotels });