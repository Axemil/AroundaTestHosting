import { combineReducers } from "redux"
import { HYDRATE } from 'next-redux-wrapper';

import tags from "./tags"
import tagNames from "./tagNames"
import posts from "./posts"
import post from "./post"
import popup from "./popup"
import message from "./message"
import message2 from "./message2"
import errorMessage from "./errorMessage"

const rootReducer = (state, action) => {
  if (action && action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    }
    
    return nextState
  } else {
    return combineReducers({
      tags,
      tagNames,
      posts,
      post,
      popup,
      message,
      message2,
      errorMessage
    })(state, action)
  }
}
export default rootReducer
