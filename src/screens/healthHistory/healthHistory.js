import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Header, Card } from '../../components'
import { Share, Eye, Download, Clips, Trash } from "../../shared/images";
import "./healthHistory.scss";

const actions = (
    <div className="d-flex justify-content-around align-items-center">
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
        date: "09/02/2021",
        doctor: "Dr. Lorem Ipsum",
        actions: actions
    }
];
const HealthHistory = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <Header title="Histórico de saúde" />
            <div className="section">
                <div className="content">
                    <div className="cards">
                        <div className="cards-content">
                            <Link to="/historico-de-saude/prontuarios">
                                <Card
                                    title={"Prontuário Médico"}
                                    color={"blue-light"} />
                            </Link>
                            <Link to="/historico-de-saude/exams">
                                <Card
                                    title={"Exames"}
                                    color={"green"} />
                            </Link>
                            <Link to="/historico-de-saude/receitas-medicas">
                                <Card
                                    title={"Receitas Médicas"}
                                    color={"blue"} />
                            </Link>
                            <Link to="/historico-de-saude/controle-da-saude">
                                <Card
                                    title={"Controle de Saúde"}
                                    color={"red"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="d-flex align-items-center flex-wrap">
                    <h2 className="fs-20 fw-600 color-black font-nunito">Prontuário Médico</h2>
                    <Link><p className="fs-16 fw-600 color-blue mx-4">Ver mais</p></Link>
                </div>
                <div className="content table-history">
                    <ul className=" mt-5">
                        <li className="row-header">
                            <div className="column-item d-flex justify-content-start align-items-center">
                                <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Registrado em</p>
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

            <div className="section">
                <div className="d-flex align-items-center flex-wrap">
                    <h2 className="fs-20 fw-600 color-black font-nunito">Exames</h2>
                    <Link><p className="fs-16 fw-600 color-blue mx-4">Ver mais</p></Link>
                </div>
                <div className="content table-history">
                    <ul className=" mt-5">
                        <li className="row-header">
                            <div className="column-item d-flex justify-content-start align-items-center">
                                <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Registrado em</p>
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

            <div className="section">
                <div className="d-flex align-items-center flex-wrap">
                    <h2 className="fs-20 fw-600 color-black font-nunito">Receitas médicas</h2>
                    <Link><p className="fs-16 fw-600 color-blue mx-4">Ver mais</p></Link>
                </div>
                <div className="content table-history">
                    <ul className=" mt-5">
                        <li className="row-header">
                            <div className="column-item d-flex justify-content-start align-items-center">
                                <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Registrado em</p>
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

            <div className="section">
                <div className="d-flex align-items-center flex-wrap">
                    <h2 className="fs-20 fw-600 color-black font-nunito">Controle de Saúde</h2>
                    <Link><p className="fs-16 fw-600 color-blue mx-4">Ver mais</p></Link>
                </div>
                <div className="content table-history">
                    <ul className=" mt-5">
                        <li className="row-header">
                            <div className="column-item d-flex justify-content-start align-items-center">
                                <p className="fs-18 fs-sm-20 fw-600 color-black font-nunito">Registrado em</p>
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
        </React.Fragment>
    );
};

export default HealthHistory;
