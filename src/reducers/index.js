import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import products from './products';

const rootReducer = combineReducers({
  routing: routerReducer,
  products,
  form: formReducer,
});

export default rootReducer;
