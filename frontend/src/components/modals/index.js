import React from 'react';
import { connect } from 'react-redux';

import addressModal from './address';

function ModalRoot({ modal }) {
    const modals = {
        ADDRESS: addressModal,
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
