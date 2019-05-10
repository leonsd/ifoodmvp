import React, { Fragment, useState, useEffect } from 'react';
import { Title, Box, Column, Image, Icon } from 'rbx';
import { FaStar } from 'react-icons/fa';

import CategoryProducts from 'components/category-products';
import api from 'services/api';

export default function ShowRestaurant(props) {
    const [restaurant, setRestaurant] = useState({});

    const fetchRestaurant = async () => {
        const response = await api.fetchRestaurant(props.match.params.id);
        setRestaurant(response.data.restaurant);
    };

    useEffect(() => {
        fetchRestaurant();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Fragment>
            <Title size="4">{restaurant.name}</Title>
            <Box>
                <Column.Group>
                    <Column size={3}>
                        <Image src={restaurant.image_url} />
                    </Column>
                    <Column size={7}>
                        <p>{restaurant.description}</p>
                        <footer>
                            <span className="dashed_box">Entrega ${restaurant.delivery_tax}</span>
                            <span>
                                <Icon size="medium" color="warning">
                                    <FaStar />
                                </Icon>
                                <span className="has-text-warning has-text-weight-bold">{restaurant.review || 0}</span>
                            </span>
                        </footer>
                    </Column>
                </Column.Group>
            </Box>

            {restaurant.product_categories && restaurant.product_categories.map((category) => {
                return <CategoryProducts {...category} key={category.id} />;
            })}
        </Fragment>
    );
}
