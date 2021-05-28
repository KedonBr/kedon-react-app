import { SHOW_MODAL_HEADER } from './ActionTypes'

export const showModalHeader = (value) => ({
    type: SHOW_MODAL_HEADER,
    isOpenModalHeader: value,
});