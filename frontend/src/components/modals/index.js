import React from 'react';
import { connect } from 'react-redux';

import addressModal from './address';
import addProductModal from './add-product';
import orderModal from './order';

function ModalRoot({ modal }) {
    const modals = {
        ADDRESS: addressModal,
        ADD_PRODUCT: addProductModal,
        ORDER: orderModal,
    };

    if (!modal.type) {
        return null;
    }

    const Modal = modals[modal.type];

    return (
        <div className="modal_root">
            <Modal {...modal.props} />
        </div>
    );
}

const mapStateToProps = (store) => {
    return { modal: store.modal };
};

export default connect(mapStateToProps)(ModalRoot);
