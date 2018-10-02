import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT } from '../actions/types';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { signedIn : true, user } : {};

export function authentication (state = initialState, action){
  switch(action.type){
    case SIGNIN_REQUEST:
      return {
        signingIn: true,
        user: action.user
      };
    case SIGNIN_SUCCESS:
      return{
        signedIn: true,
        user: action.user
      };
    case SIGNIN_FAILURE:
      return {};
    case SIGNOUT:
      return {};
    default:
      return state;
  }
}
