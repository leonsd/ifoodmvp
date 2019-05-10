import React, { Fragment } from 'react';

import ListRestaurants from 'components/list-restaurants';
import Categories from 'components/categories';

const Restaurants = () => (
    <Fragment>
        <Categories />
        <ListRestaurants />
    </Fragment>
);

export default Restaurants;
