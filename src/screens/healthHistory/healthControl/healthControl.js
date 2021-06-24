import React from 'react';
import { Link } from 'react-router-dom'
import { Header, Button, Input } from '../../../components'
import { Share, Eye, Download, Clips, Trash, Search } from '../../../shared/images'
import './healthControl.scss'
const actions = (
    <div className="d-flex justify-content-center align-items-center">
        <button className="row-item__action">
            <Clips width={30} height={20} />
            <span>Anexar documento</span>
        </button>
        <button className="row-item__action">
            <Share width={30} height={20} />
            <span>Compartilhar</span>
        </button>
        <button className="row-item__action">
            <Eye width={30} height={20} />
            <span>Visualizar</span>
        </button>
        <button className="row-item__action">
            <Download width={30} height={20} />
            <span>Baixar</span>
        </button>
        <button className="row-item__action">
            <Trash width={30} height={20} />
            <span>Excluir</span>
        </button>
    </div>
);
const historyData = [
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
    {
        date: "16/12/2012",
        doctor: "Dr. Lorem Ipsum",
        actions: actions,
    },
];
const HealthControl = () => {
    return (
        <React.Fragment>
            <Header title="Controle de Saúde" />
            <div className="section">
                <div className="content">
                    <div className="d-flex">
                        <Link to="/historico-de-saude/adicionar-documento">
                            <Button
                                color="blue"
                                size="medium"
                                label="Adicionar Documento"
                            />
                        </Link>
                    </div>
                    <div className="table-history mt-5">
                        <Input placeholder="Pesquisar" icon={<Search className="input__icon" height={20} width={20} />} />
                        <ul>
                            <li className="row-header">
                                <div className="column-item d-flex justify-content-start align-items-center">
                                    <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Data</p>
                                </div>
                                <div className="column-item d-flex justify-content-start align-items-center">
                                    <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Médico</p>
                                </div>
                                <div className="column-item d-flex justify-content-start align-items-center">
                                    <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Ações</p>
                                </div>
                            </li>
                            {historyData.map((row) => (
                                <li className="row-item">
                                    <div className="column-item">
                                        <p className="fs-16 fs-sm-20 fw-400 color-default text-center">
                                            {row.date}
                                        </p>
                                    </div>
                                    <div className="column-item">
                                        <p className="fs-16 fs-sm-20 fw-400 color-default text-center">
                                            {row.doctor}
                                        </p>
                                    </div>
                                    <div className="column-item">
                                        {row.actions}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HealthControl;