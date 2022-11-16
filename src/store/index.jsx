import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';
import mainMiddleware from '../middlewares/main';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(mainMiddleware ),
);

const store = createStore(reducer, enhancers);

export default store;