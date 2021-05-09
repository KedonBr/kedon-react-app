import { combineReducers } from 'redux';

import { homeReducer } from '../../screens/home/redux/reducers';
import authReducer from './authentication/reducer';

export const rootReducer = combineReducers({
    homeReducer: homeReducer,
    auth: authReducer,
  });