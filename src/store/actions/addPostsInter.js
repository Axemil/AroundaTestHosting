import { ADD_POSTS_INTER } from '../constants';

const addPostsInter = postsInter => ({
  type: ADD_POSTS_INTER,
  payload: postsInter,
});

export default addPostsInter;
