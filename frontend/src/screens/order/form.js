import React, { useState } from 'react';
import { Box, Column, Title, Input, Field, Button, Control, Label } from 'rbx';
import { connect } from 'react-redux';

import api from 'services/api';
import history from '../../history';

function Form(props) {
    const [name, setName] = useState('');
    const [document, setDocument] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [restaurantId, setRestaurantId] = useState(props.restaurant.id);

    async function create(event) {
        event.preventDefault();

        try {
            const response = await api.createOrder(
                {
                    name,
                    document,
                    phone_number: phoneNumber,
                    restaurant_id: restaurantId,
                },
                props.order,
                props.address,
            );

            const { id } = response.data.order;
            history.push(`/orders/${id}`);
        } catch (error) {}
    }

    return (
        <Column.Group>
            <Column size={10} offset={1}>
                <Title size={5} className="has-text-custom-gray-darker">
                    Finalizar Pedido
                </Title>
                <Box>
                    <Column.Group>
                        <Column size={10} offset={1}>
                            <form onSubmit={create}>
                                <Field>
                                    <Label>Nome</Label>
                                    <Control>
                                        <Input
                                            type="text"
                                            placeholder="Leonardo Scorza..."
                                            name="name"
                                            value={name}
                                            onChange={(event) => {
                                                return setName(event.target.value);
                                            }}
                                            required
                                        />
                                    </Control>
                                </Field>

                                <Field>
                                    <Label>CPF</Label>
                                    <Control>
                                        <Input
                                            type="text"
                                            placeholder="396.134.567-34"
                                            name="cpf"
                                            value={document}
                                            onChange={(event) => {
                                                return setDocument(event.target.value);
                                            }}
                                            required
                                        />
                                    </Control>
                                </Field>
                                <Field>
                                    <Label>Telefone</Label>
                                    <Control>
                                        <Input
                                            type="text"
                                            placeholder="(19) 997095432"
                                            name="phone_number"
                                            value={phoneNumber}
                                            onChange={(event) => {
                                                return setPhoneNumber(event.target.value);
                                            }}
                                            required
                                        />
                                    </Control>
                                </Field>

                                <Field>
                                    <br />
                                    <Title size={6} className="has-text-custom-gray-darker">
                                        Endereço de entrega
                                    </Title>
                                    <p>
                                        {props.address.street}, {props.address.number}
                                    </p>
                                    <p>
                                        {props.address.city}, {props.address.state}
                                    </p>
                                </Field>

                                <br />
                                <Field kind="group" align="centered">
                                    <Control>
                                        <Button size="medium" color="custom-orange">
                                            <span className="has-text-white">Realizar Pedido</span>
                                        </Button>
                                    </Control>
                                </Field>
                            </form>
                        </Column>
                    </Column.Group>
                </Box>
            </Column>
        </Column.Group>
    );
}

const mapStateToProps = (state) => {
    const { address, order } = state;

    return {
        address: address.address,
        order: order.order,
        restaurant: order.restaurant,
    };
};

export default connect(mapStateToProps)(Form);
