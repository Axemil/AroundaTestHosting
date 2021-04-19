import { ADD_POSTS_INTER } from '../constants';

const postsInter = (state = [], action) => {
  if (action.type === ADD_POSTS_INTER) {
    return [...action.payload];
  }
  return state;
};

export default postsInter;
