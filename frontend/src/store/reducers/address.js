import { SET_ADDRESS } from 'store/actions/types';

// const initialState = {

// };

export default function (state = { address: [] }, action) {
    switch (action.type) {
    case SET_ADDRESS:
        return {
            ...state,
            address: action.address,
        };
    default:
        return state;
    }
}
