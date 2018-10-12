import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer.js';
import feedReducer from './feedReducer.js';

export default combineReducers({
  auth: authenticationReducer,
  feed: feedReducer
});
