import { SET_ADDRESS } from './types';

export const setAddress = (address) => {
    return async (dispatch) => {
        dispatch({
            type: SET_ADDRESS,
            address,
        });
    };
};
