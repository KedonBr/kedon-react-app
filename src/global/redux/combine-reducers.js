import { combineReducers } from 'redux';

import { homeReducer } from '../../screens/home/redux/reducers';
import { loginReducer } from '../../screens/login/redux/reducers';
import authReducer from './authentication/reducer';

export const rootReducer = combineReducers({
    homeReducer: homeReducer,
    loginReducer: loginReducer,
    auth: authReducer,
  });