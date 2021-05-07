import { IS_HOME } from '../actions/actionTypes';

const initialState = {
    isHome: false
};


const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_HOME:
            return {
                ...state,
                data: action.data,
                isHome: action.isHome
            };
        default:
            return state;
    }
}
export default homeReducer