import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'

import reducer from '../reducers'
import search from '../middlewares/search'
import users from '../middlewares/users'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  // on le branche sur le store
  applyMiddleware(search, users ),
);

const store = createStore(reducer, enhancers);

export default store;