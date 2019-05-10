/* eslint-disable camelcase */

import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { Box, Column, Icon } from 'rbx';

import 'styles/restaurant.scss';

export default function Restaurant({ id, image_url, name, category_title, delivery_tax, review }) {
    return (
        <Column size="one-third" id="restaurant">
            <Link to={`/restaurants/${id}`}>
                <Box>
                    <Column.Group gapless>
                        <Column size={3} textAlign="centered">
                            <img src={image_url} alt="new" />
                        </Column>
                        <Column size={7} mobile={{ size: 12 }} className="infos">
                            <h2 className="title has-text-custom-grey">{name}</h2>
                            <h4 className="subtitle has-text-weight-bold">{category_title}</h4>
                            <span className="dashed_box">Entrega ${delivery_tax}</span>
                        </Column>
                        <Column size={2} id="reviews">
                            <Icon size="medium" color="warning">
                                <FaStar />
                            </Icon>
                            <span className="has-text-warning has-text-weight-bold">{review || 0}</span>
                        </Column>
                    </Column.Group>
                </Box>
            </Link>
        </Column>
    );
}
