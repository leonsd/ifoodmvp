import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001' });

export default {
    fetchRestaurants: (category) => {
        const filter = category ? `?category=${category.title}` : '';

        return client.get(`/restaurants${filter}`);
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
