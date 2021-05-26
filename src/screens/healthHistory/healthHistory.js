import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Button from "../../components/button/button";
import { Share, Eye, Download } from "../../shared/images";
import "./healthHistory.scss";

const actions = (
    <div className="d-flex justify-content-center align-items-center">
        <button className="row-item__action">
            <Share width={30} height={20} />
        </button>
        <button className="row-item__action">
            <Eye width={30} height={20} />
        </button>
        <button className="row-item__action">
            <Download width={30} height={20} />
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
const HealthHistory = () => {
    const history = useHistory()
    return (
        <React.Fragment>
            <div className="section">
                <header className="d-flex justify-content-end">
                    <Link to="/historico-de-saude/adicionar-documento">
                        <Button
                            color="blue"
                            size="medium"
                            label="Adicionar Documento"
                        />
                    </Link>
                </header>
                <main className="mt-5">
                    <ul>
                        <li className="row-header">
                            <div className="column-item d-flex justify-content-start align-items-center">
                                <p className="fs-20 fw-400 color-default text-center">Data</p>
                            </div>
                            <div className="column-item d-flex justify-content-center align-items-center">
                                <p className="fs-20 fw-400 color-default text-center">Médico</p>
                            </div>
                            <div className="column-item d-flex justify-content-end align-items-center">
                                <p className="fs-20 fw-400 color-default text-center">Ações</p>
                            </div>
                        </li>
                        {historyData.map((row) => (
                            <li className="row-item">
                                <div className="column-item d-flex justify-content-start align-items-center">
                                    <p className="fs-16 fw-400 color-default text-center">
                                        {row.date}
                                    </p>
                                </div>
                                <div className="column-item d-flex justify-content-center align-items-center">
                                    <p className="fs-20 fw-400 color-default text-center">
                                        {row.doctor}
                                    </p>
                                </div>
                                <div className="column-item d-flex justify-content-end align-items-center">
                                    {row.actions}
                                </div>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        </React.Fragment>
    );
};

export default HealthHistory;
