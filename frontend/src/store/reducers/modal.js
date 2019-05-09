import { SHOW_MODAL, HIDE_MODAL } from 'store/actions/types';

const initialState = {
    type: null,
    props: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
    case SHOW_MODAL:
        return {
            type: action.modalType,
            props: action.props,
        };
    case HIDE_MODAL:
        return initialState;
    default:
        return state;
    }
};
