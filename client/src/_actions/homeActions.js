import { GETNEWPOSTS_REQUEST, GETNEWPOSTS_SUCCESS, GETNEWPOSTS_FAILURE } from './types';
import { homeService } from '../_services';

export function getNewPosts(token){
  return dispatch => {
    dispatch(request(token));
    homeService.getNewPosts(token)
      .then(
        posts => {
          dispatch(success(posts));
        }
      ).catch(err => {
        dispatch(failure(err));
        console.log(err);
      });
  }

  function request(token) { return { type: GETNEWPOSTS_REQUEST, token }}
  function success(posts) { return { type: GETNEWPOSTS_SUCCESS, posts }}
  function failure(error) { return { type: GETNEWPOSTS_FAILURE, error }}
}
