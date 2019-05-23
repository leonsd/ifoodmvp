import React from 'react';
import { Box, Column } from 'rbx';

import Order from 'components/order';
import Form from './form';
import 'styles/new-order.scss';

export default function CreateOrder() {
    return (
        <Column.Group centered>
            <Column size="4">
                <Form />
            </Column>
            <Column size="3" offset="1">
                <Box className="shopping_cart">
                    <Order finish_btn_active={false} />
                </Box>
            </Column>
        </Column.Group>
    );
}
