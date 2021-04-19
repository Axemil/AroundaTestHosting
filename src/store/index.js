import { createStore, applyMiddleware, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import logger from 'redux-logger'

import thunk from 'redux-thunk';
import root from './reducers/root';

let composeEnhancers
if(process.browser) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose
}
export const initStore = () => createStore(root, composeEnhancers(applyMiddleware(thunk,logger)))
export default createWrapper(initStore);
