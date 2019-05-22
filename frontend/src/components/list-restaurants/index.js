import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Column } from 'rbx';

import { fetchRestaurants } from 'store/actions/restaurant';

import Restaurant from './restaurant';

function ListRestaurants({ restaurants, ...props }) {
    useEffect(() => {
        props.fetchRestaurants();
    }, []); // eslint-disable-line


    useEffect(() => {
        props.fetchRestaurants(props.address);
    }, [props.address]); // eslint-disable-line

    return (
        <div className="restaurants-list">
            <h2 className="title is-size-4">Restaurantes</h2>

            <Column.Group multiline gapSize={2}>
                {restaurants.map((restaurant) => {
                    return <Restaurant key={restaurant.name} {...restaurant} />;
                })}
            </Column.Group>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { address, restaurants } = state;

    return {
        address: address.address,
        restaurants,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchRestaurants }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ListRestaurants);
