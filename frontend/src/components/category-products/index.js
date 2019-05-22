import React from 'react';
import { Title, Column, Box, Image } from 'rbx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showModal } from 'store/actions/modal';

import 'styles/product.scss';

const CategoryProducts = ({ title, products, restaurant, ...props }) => {
    return (
        <div id="product">
            <Title size="5">{title}</Title>
            <Column.Group gapSize={2} multiline>
                {products.map((product) => {
                    return (
                        <Column size="6" key={product.id}>
                            <Box>
                                <button
                                    type="button"
                                    onClick={() => {
                                        return props.showModal('ADD_PRODUCT', {
                                            product,
                                            restaurant,
                                        });
                                    }}
                                >
                                    <Column.Group>
                                        <Column size="three-fifths">
                                            <Title size="6">{product.name}</Title>
                                            <p>{product.description}</p>
                                            <span className="dashed_box">
                                                Preço ${product.price}
                                            </span>
                                        </Column>
                                        <Column size="two-fifths">
                                            <Image src={product.image_url} width="50%" />
                                        </Column>
                                    </Column.Group>
                                </button>
                            </Box>
                        </Column>
                    );
                })}
            </Column.Group>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ showModal }, dispatch);
};

export default connect(
    null,
    mapDispatchToProps,
)(CategoryProducts);
