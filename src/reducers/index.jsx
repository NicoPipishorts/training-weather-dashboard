import { combineReducers } from 'redux';

import mainreducer from './main';

const rootReducer = combineReducers({
  main: mainreducer,
});

export default rootReducer;