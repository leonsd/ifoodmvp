import React, { Component, Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Input, Column, Title, Button, Field, Control, Label, Select } from 'rbx';
import { bindActionCreators } from 'redux';

import { hideModal } from 'store/actions/modal';
import { addOrderItem } from 'store/actions/order';

function AddProductForm(props) {
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        props.addOrderItem(props.restaurant, props.product, quantity, comment);
        props.hideModal('ADD_PRODUCT');
    }

    return (
        <Fragment>
            <Column.Group>
                <Column size={10} offset={1}>
                    <img src={props.product.image_url} />
                    <Title size={6} className="has-text-custom-black-darker">
                        {props.product.name}
                    </Title>
                    <Title size={6} subtitle className="has-text-custom-black-darker">
                        {props.product.description}
                    </Title>

                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Algum comentário?</Label>
                            <Control>
                                <Input
                                    type="text"
                                    name="comment"
                                    value={comment}
                                    onChange={(event) => {
                                        return setComment(event.target.value);
                                    }}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label>Quantidade</Label>
                            <Control>
                                <Select.Container fullwidth>
                                    <Select
                                        required
                                        name="quantity"
                                        value={quantity}
                                        onChange={(event) => {
                                            return setQuantity(event.target.value);
                                        }}
                                    >
                                        {[...Array(30).keys()].map((number, i) => {
                                            return (
                                                <Select.Option key={number} value={number + 1}>
                                                    {number + 1}
                                                </Select.Option>
                                            );
                                        })}
                                    </Select>
                                </Select.Container>
                            </Control>
                        </Field>

                        <br />
                        <Field kind="group" align="centered">
                            <Control>
                                <Button size="medium" color="custom-orange">
                                    <span className="has-text-white">Adicionar Produto</span>
                                </Button>
                            </Control>
                        </Field>
                    </form>
                </Column>
            </Column.Group>
        </Fragment>
    );
}

const mapStateToProps = (state) => {
    const { modal } = state;

    return { modal };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ hideModal, addOrderItem }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddProductForm);
