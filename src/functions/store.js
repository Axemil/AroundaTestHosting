import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ADD_TAGS, ADD_POSTS, ADD_POSTS_INTER } from "./actions";

const normalizePayload = payload => {
  let allItems = payload.reduce(
    (acc, val) => ({ ...acc, [val.id]: val }),
    {}
  );
  const itemIds = Object.keys(allItems);
  return {
    allItems,
    itemIds
  };
};

const tags = (state = {}, action) => {
  switch (action.type) {
    case ADD_TAGS:
      return normalizePayload(action.payload)
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case ADD_POSTS:
      return normalizePayload(action.payload)
    default:
      return state;
  }
};

const postsInter = (state = [], action) => {
  switch (action.type) {
    case ADD_POSTS_INTER:
      return normalizePayload(action.payload)
    default:
      return state;
  }
};

const reducer = combineReducers({
  tags,
  posts,
  postsInter
});

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
