import React from "react";
import Input from '../../../../components/input/input';
import InputSelect from '../../../../components/inputSelect/inputSelect';
import InputArea from '../../../../components/inputArea/inputArea';
import InputFile from '../../../../components/inputFile/inputFile';
import { Star, UnlitStar, TimeIcon } from "../../../../shared/images";
import "./schedules.scss";

const Schedules = ({ image, name, stars, sector, time, value }) => {
    return (
        <div className="schedules mb-3">
            <div className="d-flex align-items-stretch">
                <img className="schedules__profile" src={image} />
                <div className="schedules__content">
                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-between algin-items-center">
                            <h5 className="fs-20 fw-400 color-default d-flex align-items-center">
                                {name}
                            </h5>
                            <div>
                                <Star width={16} className="star" />
                                <Star width={16} className="star" />
                                <Star width={16} className="star" />
                                <Star width={16} className="star" />
                                <UnlitStar width={16} className="star" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="fs-14 fw-600 color-default">{sector}</p>
                            <p className="fs-14 fw-400 color-default">{stars}</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex flex-column">
                            <p className="fs-14 fw-400 color-default">
                                Valor da consulta: <strong className="fw-600 color-money">R${value}</strong>
                            </p>
                            <p className="fs-14 fw-400 color-default">
                                Canais de atendimento: <strong className="fw-600 color-blue">Jitsi</strong>
                            </p>
                        </div>
                        <div className="d-flex align-self-end align-items-center mt-2">
                            <TimeIcon height={16} />
                            <p className="fs-14 fw-400 color-default">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="schedules__form mt-5">
                <Input name="date" type="date" />

                <p className="fs-20 fw-400 color-default mt-3">Modalidade:</p>
                <div className="modality d-flex align-items-center mt-2">
                    <label>
                        <input type="radio" name="modality" defaultChecked />
                        <span className="modality__button button-left">Online</span>
                    </label>
                    <label>
                        <input type="radio" name="modality" />
                        <span className="modality__button button-right">Presencial</span>
                    </label>
                </div>
                <p className="fs-20 fw-400 color-default mt-3">Motivo da consulta:</p>
                <div className="modality d-flex align-items-center mt-2">
                    <label>
                        <input type="radio" name="reason" defaultChecked />
                        <span className="modality__button button-left">Rotina</span>
                    </label>
                    <label>
                        <input type="radio" name="reason" />
                        <span className="modality__button button-right">Retorno</span>
                    </label>
                </div>
                <p className="fs-20 fw-400 color-default mt-3">Formas de pagamento:</p>
                <InputSelect options={[{ label: "Catão de crédito", value: "Catão de crédito" }, { label: "Boleto", value: "Boleto" }]} />

                <p className="fs-20 fw-400 color-default mt-3">Observações:</p>
                <InputArea name="comments" placeholder="Digite Observações..." />

                <p className="fs-20 fw-400 color-default mt-3">Anexos:</p>
                <InputFile />
                
                <div className="d-flex mt-5">
                    <button className="button__dark">
                        Agendar
                    </button>
                    <button className="button__danger">
                        Cancelar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Schedules;
