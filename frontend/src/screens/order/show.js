/* eslint-disable react/destructuring-assignment */
import React, { Fragment, useEffect } from 'react';
import { Box, Column, Title } from 'rbx';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchOrder } from 'store/actions/order';

import WaitingImage from 'assets/images/health-icons-orgainic-icon.png';
import 'styles/show-order.scss';

function Show(props) {
    useEffect(() => {
        props.fetchOrder(props.match.params.id);
    }, []);

    return (
        <Column.Group className="status_box">
            <Column size={4} offset={4} textAlign="centered">
                <Column.Group>
                    <Column size={8} offset={2} textAlign="centered">
                        <Box>
                            {props.order.status === 'waiting' ? (
                                <Fragment>
                                    <Title
                                        size={4}
                                        className="has-text-custom-green-darker status_msg"
                                    >
                                        Pedido a caminho
                                    </Title>
                                    <p className="status_description">
                                        Em breve você recebera sua comida saudável em casa
                                    </p>
                                </Fragment>
                            ) : (
                                <Title size={4} className="has-text-custom-gray-darker status_msg">
                                    Pedido entregue
                                </Title>
                            )}
                            <img src={WaitingImage} className="status_img" alt="new" />
                        </Box>
                    </Column>
                </Column.Group>
            </Column>
        </Column.Group>
    );
}

const mapStateToProps = (state) => {
    const { order } = state;

    return {
        order: order.order,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchOrder }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Show);
