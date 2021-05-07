import { combineReducers } from 'redux';

import { homeReducer } from '../../screens/home/redux/reducers';

export const rootReducer = combineReducers({
    homeReducer: homeReducer,
  });