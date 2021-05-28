import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { showModalHeader } from './redux/actions'
import { GoBack, Avatar, Modal, InputFile } from '../../components';
import './header.scss';

const Header = ({ title }) => {
    const [uploads, setUploads] = useState([])
    const dispatch = useDispatch()
    const headerReducer = useSelector(state => state.headerReducer);

    const handleUpload = () => {
        console.log("teste de upload")
    }

    const handleDelete = () => {
        console.log("teste de upload delete")
    }
    return (
        <React.Fragment>
            <div className="section">
                <div className="d-flex justify-content-between align-items-center">
                    <GoBack label={title} />

                    <div className="d-flex align-items-center">
                        <button className="fs-20 fw-400 color-blue mx-2" onClick={() => dispatch(showModalHeader(true))}>Alterar Foto</button>
                        <button onClick={() => dispatch(showModalHeader(true))}><Avatar /></button>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={headerReducer.isOpenModalHeader}
                handleCloseModal={() => dispatch(showModalHeader(false))}
                title="Alterar Foto"
                chilren={(
                    <div className="edit-photo d-flex flex-column align-items-stretch justify-content-center py-3">
                        <div className="d-flex justify-content-center py-3">
                            <img
                                className="photo"
                                src="https://ogimg.infoglobo.com.br/in/24954685-f93-a27/FT1086A/xviuva.jpg.pagespeed.ic.CtHmw2NcIH.jpg" />
                        </div>
                        <InputFile accept={'image/*'} handleUpload={handleUpload} handleDelete={handleDelete} uploads={uploads} />
                    </div>
                )} />
        </React.Fragment>
    )
}

export default Header;