import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import home from './home';
import common from './common';
import statuses from './statuses';
import formContent from './formContent';

const rootReducer = combineReducers({
  routing: routerReducer,
  home,
  common,
  statuses,
  form: formReducer,
  formContent,
});

export default rootReducer;
