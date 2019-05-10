import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Input, Column, Title, Button, Field, Control, Label, Select } from 'rbx';

import { hideModal } from 'store/actions/modal';
import { setAddress } from 'store/actions/address';

import statesList from './states_list';

function AddressForm({ address, ...restProps }) {
    const [fullAddress, setFullAddress] = useState({
        state: address.state,
        city: address.city,
        street: address.street,
        number: address.number,
        cep: address.cep,
        complement: address.complement,
        reference: address.statreference,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFullAddress({
            ...fullAddress,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        restProps.setAddress(fullAddress);
        restProps.hideModal('ADDRESS');
    };

    return (
        <Fragment>
            <Column.Group>
                <Column size={10} offset={1}>
                    <Title size={5} className="has-text-custom-gray-darker status_msg">
                        Endereço de entrega
                    </Title>
                </Column>
            </Column.Group>
            <Column.Group>
                <Column size={10} offset={1}>
                    <form onSubmit={handleSubmit}>
                        <Field>
                            <Label>Estado</Label>
                            <Control>
                                <Select.Container fullwidth>
                                    <Select required name="state" value={fullAddress.state} onChange={handleInputChange}>
                                        {statesList.map((state) => {
                                            return (
                                                <Select.Option key={state} value={state}>{state}</Select.Option>
                                            );
                                        })}
                                    </Select>
                                </Select.Container>
                            </Control>
                        </Field>
                        <Field>
                            <Label>Cidade</Label>
                            <Control>
                                <Input type="text" placeholder="São Paulo..." required name="city" value={fullAddress.city} onChange={handleInputChange} />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Endereço</Label>
                            <Control>
                                <Input type="text" placeholder="Av Paulista..." required name="street" value={fullAddress.street} onChange={handleInputChange} />
                            </Control>
                        </Field>

                        <Field horizontal>
                            <Field.Body>
                                <Field>
                                    <Label>Numero</Label>
                                    <Control>
                                        <Input type="text" placeholder="15" required name="number" value={fullAddress.number} onChange={handleInputChange} />
                                    </Control>
                                </Field>
                                <Field>
                                    <Label>Cep</Label>
                                    <Control>
                                        <Input type="text" placeholder="13720-000" required name="cep" value={fullAddress.cep} onChange={handleInputChange} />
                                    </Control>
                                </Field>
                            </Field.Body>
                        </Field>

                        <Field>
                            <Label>Complemento</Label>
                            <Control>
                                <Input type="text" placeholder="Av Paulista..." name="complement" value={fullAddress.complement} onChange={handleInputChange} />
                            </Control>
                        </Field>

                        <Field>
                            <Label>Referência</Label>
                            <Control>
                                <Input type="text" placeholder="Av Paulista..." name="reference" value={fullAddress.reference} onChange={handleInputChange} />
                            </Control>
                        </Field>
                        <br />
                        <Field kind="group" align="centered">
                            <Control>
                                <Button size="medium" color="custom-orange">
                                    <span className="has-text-white">Salvar endereço</span>
                                </Button>
                            </Control>
                        </Field>
                    </form>
                </Column>
            </Column.Group>
        </Fragment>
    );
}

const mapStateToProps = ({ address }) => {
    return {
        address: address.address,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setAddress, hideModal }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);
