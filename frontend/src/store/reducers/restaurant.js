import { FETCH_RESTAURANTS } from 'store/actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RESTAURANTS: {
            const { restaurants } = action;

            return restaurants;
        }
        default:
            return state;
    }
};
