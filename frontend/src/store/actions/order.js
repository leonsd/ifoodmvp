import { ADD_ORDER_ITEM } from './types';

export const addOrderItem = (restaurant, product, quantity, comment) => {
    return {
        type: ADD_ORDER_ITEM,
        restaurant,
        product,
        quantity,
        comment,
    };
};
