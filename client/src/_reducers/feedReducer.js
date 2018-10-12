import { GETNEWPOSTS_REQUEST, GETNEWPOSTS_SUCCESS, GETNEWPOSTS_FAILURE } from '../_actions/types';

const initialState = {gettingPosts: false, feed: []};

export default function (state = initialState, action){
  switch(action.type){
    case GETNEWPOSTS_REQUEST:
      return {
        ...state,
        gettingPosts: true
      };
    case GETNEWPOSTS_SUCCESS:
      return{
        ...state,
        gettingPosts: false,
        feed: action.posts
      };
    case GETNEWPOSTS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
}
