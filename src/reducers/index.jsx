import { combineReducers } from 'redux';

import search from './search';
import users from './users'

const rootReducer = combineReducers({
  search: search,
  users: users
});

export default rootReducer;