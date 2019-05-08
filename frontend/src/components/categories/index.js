import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box } from 'rbx';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import api from 'services/api';
import { fetchRestaurants } from 'store/actions/restaurant';
import slickSettings from './slick_settings';
import 'styles/categories.scss';

function Categories(props) {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const response = await api.fetchCategories();
        setCategories(response.data.categories);
    };

    const filterByCategory = (category) => {
        props.fetchRestaurants(category);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Fragment>
            <h3 className="title is-size-4">Categorias</h3>
            <Box>
                <Slider {...slickSettings}>
                    {categories.map((category) => {
                        return (
                            <Link to={`/restaurants?category=${category.title}`} onClick={() => filterByCategory(category)} key={category.id}>
                                <div className="slider-item">
                                    <img src={category.image_url} alt="new" />
                                    <span>{category.title}</span>
                                </div>
                            </Link>
                        );
                    })}
                </Slider>
            </Box>
        </Fragment>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchRestaurants }, dispatch);
};

export default connect(null, mapDispatchToProps)(Categories);
