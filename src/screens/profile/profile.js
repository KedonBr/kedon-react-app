import React from 'react';
import { Link } from 'react-router-dom';
import { GoBack, Button, Header } from '../../components';
const Profile = () => {
    return (
        <React.Fragment>
            <Header title="Voltar" />
            <div className="section">
                <h1 className="fs-20 fw-400 color-default">Detalhes do Perfil</h1>
                <div className="d-flex my-3">
                    <Link to="/perfil/editar-perfil">
                        <Button label="Editar Perfil" color="blue" size="large" />
                    </Link>
                    <Link to="/perfil/editar-plano">
                        <Button label="Editar Plano" color="light" size="large" />
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;