import React from 'react';

import { Button } from '../../components';
import { Close } from '../../shared/images';
import './modal.scss';

const Modal = ({ isOpen, handleCloseModal, title, chilren }) => {
    return (
        <div className={`modal ${isOpen ? 'modal--opened' : 'modal--closed'}`}>
            <div className="modal__container">
                <button className="modal__container--close" onClick={handleCloseModal}><Close height={25} width={25} /></button>
                <div className="header-modal">
                    <p className="fs-16 fs-sm-24 fw-500 color-default text-center">{title}</p>
                </div>
                <div className="main-modal">
                    {chilren}
                </div>
                <div className="footer-modal d-flex justify-content-center align-items-center">
                    <Button label="Fechar" color="red" size="medium" onClick={handleCloseModal} />
                </div>
            </div>
        </div>
    )
}

export default Modal