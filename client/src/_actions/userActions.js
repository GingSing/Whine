import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT, POSTITEM_REQUEST, POSTITEM_SUCCESS, POSTITEM_FAILURE } from './types';
import { userService } from '../_services';

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

export function postItem(username, title, content, rating, pictures, item){
  return dispatch => {
    dispatch(request());
    console.log("dispatchedrequest");
    userService.postItem(username, title, content, rating, pictures, item)
      .then(
        post => {
          dispatch(success());
        }
      ).catch(err => {
        dispatch(failure(err));
      });

  }

  function request(){ return { type: POSTITEM_REQUEST }}
  function success(){ return { type: POSTITEM_SUCCESS }}
  function failure(){ return { type: POSTITEM_FAILURE }}
}

export function signOut(){
  userService.signOut();
  return { type: SIGNOUT };
}
