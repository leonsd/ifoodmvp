import api from 'services/api';
import { FETCH_RESTAURANTS } from './types';

export const fetchRestaurants = (category = null) => {
    return async (dispatch) => {
        const response = await api.fetchRestaurants(category);
        dispatch({
            type: FETCH_RESTAURANTS,
            restaurants: response.data.restaurants,
        });
    };
};

export const searchRestaurants = (search) => {
    return async (dispatch) => {
        const response = await api.searchRestaurants(search);
        dispatch({
            type: FETCH_RESTAURANTS,
            restaurants: response.data.restaurants,
        });
    };
};
