import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3001' });

export default {
    fetchRestaurants: (address, category) => {
        const cityParams = address && address.city !== undefined ? `city=${address.city}` : '';
        const categoryParams = category !== null ? `&category=${category.title}` : '';

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
    fetchOrder: (id) => {
        return client.get(`/orders/${id}`);
    },
    createOrder: (order, productsOrder, address) => {
        const newProductOrders = productsOrder.map((productOrder) => {
            return {
                product_id: productOrder.product.id,
                comment: productOrder.comment,
                quantity: productOrder.quantity,
            };
        });

        const fullAddress = [
            address.street,
            address.number,
            address.city,
            address.state,
            address.cep,
            address.reference ? `Referência: ${address.reference}` : null,
            address.complement ? `Complemento: ${address.complement}` : null,
        ].join(',');

        // eslint-disable-next-line no-param-reassign
        order.order_products_attributes = newProductOrders;
        // eslint-disable-next-line no-param-reassign
        order.address = fullAddress;

        return client.post('/orders', order);
    },
};
