import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT } from './types';
import { userService } from '../_services/userService';

export const userActions = {
  signIn,
  signOut
}

function signIn(info){
  return dispatch => {
    dispatch(request({ username }));
    userService.signIn(username, password)
      .then(
        user => {
          dispatch(success(user));
          history.push('/');
        },
        error => {
          dispatch(failure(error.toString()));
        }
      )
  }

  function request(user) { return { type: SIGNIN_REQUEST, user }}
  function success(user) { return { type: SIGNIN_SUCCESS, user }}
  function failure(user) { return { type: SIGNIN_FAILURE, error }}
}

function signOut(){
  userService.signOut();
  return { type: SIGNOUT };
}
