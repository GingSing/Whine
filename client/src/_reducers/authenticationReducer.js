import { SIGNIN_REQUEST, SIGNIN_FAILURE, SIGNIN_SUCCESS, SIGNOUT } from '../_actions/types';

let user = localStorage.getItem('user');
const initialState = user ? { signingIn: false, signedIn: true, user: user } : { signingIn: false, signedIn: false, user: null};

export default function (state = initialState, action){
  switch(action.type){
    case SIGNIN_REQUEST:
      return {
        ...state,
        signingIn: true,
        user: action.user
      };
    case SIGNIN_SUCCESS:
      return{
        ...state,
        signingIn: false,
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
