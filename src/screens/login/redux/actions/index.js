import { USER_TYPE } from './actionTypes';

export const userType = value => ({
    type: USER_TYPE,
    userType: value
});