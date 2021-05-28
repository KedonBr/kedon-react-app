import { SHOW_MODAL_HEADER } from '../actions/ActionTypes'

const initialState = {
    isOpenModalHeader: false,
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL_HEADER:
            return {
                ...state,
                isOpenModalHeader: action.isOpenModalHeader
            }
        default:
            return state;
    }
}

export default filterReducer;