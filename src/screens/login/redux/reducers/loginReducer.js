import { USER_TYPE } from '../actions/actionTypes';

const initialState = {
    userType: 'INITIAL'
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_TYPE:
            return {
                ...state,
                data: action.data,
                userType: action.userType
            };
        default:
            return state;
    }
}
export default loginReducer