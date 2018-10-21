import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT, POST_REQUEST, POST_SUCCESS, POST_FAILURE } from './types';
import { userService } from '../_services/userServices';

export function signIn(username, password){
  return dispatch => {
    dispatch(request(username));
    userService.signIn(username, password)
      .then(
        user => {
          dispatch(success(user));
        }
      ).catch(err => {
        dispatch(failure(err));
        console.log(err);
      });
  }

  function request(user) { return { type: SIGNIN_REQUEST, user }}
  function success(user) { return { type: SIGNIN_SUCCESS, user }}
  function failure(error) { return { type: SIGNIN_FAILURE, error }}
}

export function post(title, content, pictures){
  return dispatch => {
    dispatch(request());
    userService.post(title, content, pictures)
      .then(
        post => {
          dispatch()
        }
      )

  }

  function request(){ return { type: POST_REQUEST }}
  function success(){ return { type: POST_SUCCESS }}
  function failure(){ return { type: POST_FAILURE }}
}

export function signOut(){
  userService.signOut();
  return { type: SIGNOUT };
}
