import React from 'react';
import { connect } from 'react-redux';
import { Box, Column, Icon } from 'rbx';
import { bindActionCreators } from 'redux';
import { FaTimes } from 'react-icons/fa';

import { hideModal } from 'store/actions/modal';
import Order from '../order';

function OrderModal(props) {
    return (
        <Column.Group centered>
            <Column size="3" mobile={{ size: 10, offset: 1 }}>
                <Box>
                    <Column.Group>
                        <Column size={12} textAlign="right">
                            <Icon
                                color="has-custom-black"
                                onClick={() => {
                                    return props.hideModal('ORDER');
                                }}
                            >
                                <FaTimes />
                            </Icon>
                        </Column>
                    </Column.Group>
                    <Column.Group multiline>
                        <Order />
                    </Column.Group>
                </Box>
            </Column>
        </Column.Group>
    );
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ hideModal }, dispatch);
};

export default connect(
    null,
    mapDispatchToProps,
)(OrderModal);
