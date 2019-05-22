import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001' });

export default {
    fetchRestaurants: (address, category) => {
        console.log('address: ', address);
        const cityParams = (address && address.city !== undefined) ? `city=${address.city}` : '';
        const categoryParams = (category !== null) ? `&category=${category.title}` : '';

        return client.get(`/restaurants?${cityParams}${categoryParams}`);
    },
    fetchRestaurant: (id) => {
        return client.get(`restaurants/${id}`);
    },
    searchRestaurants: (search) => {
        return client.get(`/restaurants/search?q=${search}`);
    },
    fetchCategories: () => {
        return client.get('/categories');
    },
};
