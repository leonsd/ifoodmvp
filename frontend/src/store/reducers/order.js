/* eslint-disable prefer-destructuring */
import { ADD_ORDER_ITEM, REMOVE_ORDER_ITEM, FETCH_ORDER } from 'store/actions/types';

export default (state = { restaurant: [], order: [] }, action) => {
    switch (action.type) {
        case ADD_ORDER_ITEM: {
            let order = [];

            if (state.restaurant && state.restaurant.id === action.restaurant.id) {
                order = state.order;
            }

            order.push({
                product: action.product,
                quantity: action.quantity,
                comment: action.comment,
            });

            return {
                ...state,
                restaurant: action.restaurant,
                order,
            };
        }
        case REMOVE_ORDER_ITEM: {
            const indexToRemove = state.order.indexOf(action.orderItem);
            const newOrder = [...state.order];
            newOrder.splice(indexToRemove, 1);

            return {
                ...state,
                order: newOrder,
            };
        }
        case FETCH_ORDER: {
            const { order } = action;
            return {
                ...state,
                order,
            };
        }
        default:
            return state;
    }
};
