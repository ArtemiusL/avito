import {
  CHANGE_FILTER,
} from './constants/filter';


export const changeFilter = payload => ({
  type: CHANGE_FILTER,
  payload,
});
