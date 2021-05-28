import { combineReducers } from 'redux';

import { loginReducer } from '../../screens/login/redux/reducers';
import { headerReducer } from '../../components/header/redux/reducers';
import authReducer from './authentication/reducer';

export const rootReducer = combineReducers({
    loginReducer: loginReducer,
    headerReducer: headerReducer,
    auth: authReducer,
  });