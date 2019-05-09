import { SHOW_MODAL, HIDE_MODAL } from './types';

export const showModal = (type, props) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_MODAL,
            modalType: type,
            props,
        });
    };
};

export const hideModal = () => {
    return (dispatch) => {
        dispatch({
            type: HIDE_MODAL,
        });
    };
};
