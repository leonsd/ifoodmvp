import React, { useState } from 'react';
import { Field, Control, Input, Icon } from 'rbx';
import { FaSearch } from 'react-icons/fa';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRestaurants } from 'store/actions/restaurant';
import 'styles/search_box.scss';

function SearchBox(props) {
    const [term, setTerm] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            props.searchRestaurants(term);
        }
    };

    return (
        <div className="search-box">
            <Field align="center">
                <Control iconRight>
                    <Input type="text" placeholder="Buscar Restaurantes" value={term} onChange={handleChange} onKeyPress={search} />
                    <Icon align="right">
                        <FaSearch />
                    </Icon>
                </Control>
            </Field>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ searchRestaurants }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBox);
