import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers/root';

let composeEnhancers
if(process.browser) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
} else {
    composeEnhancers = compose
}
export default createStore(root, composeEnhancers(applyMiddleware(thunk)));
