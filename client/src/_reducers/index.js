import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer.js';

export default combineReducers({
  auth: authenticationReducer
});
