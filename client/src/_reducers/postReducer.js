import { POSTITEM_REQUEST, POSTITEM_SUCCESS, POSTITEM_FAILURE } from '../_actions/types';

const initialState = {};

export default function (state = initialState, action){
  switch(action.type){
    case POSTITEM_REQUEST:
      return {
        ...state,
        postingItem: true
      };
    case POSTITEM_SUCCESS:
      return{
        ...state,
        postingItem: false
      };
    case POSTITEM_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
