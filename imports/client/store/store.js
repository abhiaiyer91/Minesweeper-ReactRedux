import { createStore, applyMiddleware } from 'redux';
import rootReducer from '..//reducers/rootReducer';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const middleware = [thunk, createLogger()];
const Store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default Store;

