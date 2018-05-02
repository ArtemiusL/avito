import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import products from './products';
import filter from './filter';

const rootReducer = combineReducers({
  routing: routerReducer,
  products,
  filter,
  form: formReducer,
});

export default rootReducer;
