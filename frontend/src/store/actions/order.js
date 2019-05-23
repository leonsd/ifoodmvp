import api from 'services/api';
import { ADD_ORDER_ITEM, REMOVE_ORDER_ITEM, FETCH_ORDER } from './types';

export const addOrderItem = (restaurant, product, quantity, comment) => {
    return {
        type: ADD_ORDER_ITEM,
        restaurant,
        product,
        quantity,
        comment,
    };
};

export const removeOrderItem = (orderItem) => {
    return {
        type: REMOVE_ORDER_ITEM,
        orderItem,
    };
};

export const fetchOrder = (id) => {
    return async (dispatch) => {
        try {
            const response = await api.fetchOrder(id);
            dispatch({
                type: FETCH_ORDER,
                order: response.data.order,
            });
        } catch (error) {
            throw error;
        }
    };
};
