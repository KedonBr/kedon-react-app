import React, {useState} from "react";
import Input from '../../../../components/input/input';
import InputSelect from '../../../../components/inputSelect/inputSelect';
import InputArea from '../../../../components/inputArea/inputArea';
import InputFile from '../../../../components/inputFile/inputFile';
import InputDate from '../../../../components/inputDate/inputDate';
import Button from '../../../../components/button/button';
import { Star, UnlitStar, TimeIcon } from "../../../../shared/images";
import bytesToSize from '../../../../utils/bytesToSize'
import "./schedules.scss";

const Schedules = ({ image, name, stars, sector, time, value }) => {
    const [data, setData] = useState({
        uploads: []
    })
    const handleUpload = (files) => {
        const uploadedFile = files.map(file => ({
            file,
            id: data.uploads.length,
            name: file.name,
            size: bytesToSize(file.size)
        }))
        setData({
            ...data,
            uploads: data.uploads.concat(uploadedFile)
        })
        // setUploads(uploads.concat(uploadedFile))
    }
    const handleDelete = (id) => {
        const NewUploads = data.uploads.filter(item => (item.id !== id))
        console.log(NewUploads)
        setData({
            ...data,
            uploads: NewUploads
        })
    }
    return (
        <div className="schedules mb-3">
            <div className="d-flex flex-column flex-sm-row align-items-sm-stretch">
                <img className="schedules__profile align-self-center align-self-sm-stretch" src={image} />
                <div className="schedules__content mt-3 mt-sm-0">
                    <div className="d-flex flex-column">
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                            <h5 className="fs-16 fs-sm-20 fw-600 fw-sm-400 color-default d-flex align-items-center">{name}</h5>
                            <div>
                                <Star width={16} className="star" />
                                <Star width={16} className="star" />
                                <Star width={16} className="star" />
                                <Star width={16} className="star" />
                                <UnlitStar width={16} className="star" />
                            </div>
                        </div>
                        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
                            <p className="fs-14 fw-600 color-default">{sector}</p>
                            <p className="fs-14 fw-400 color-default order-first order-lg-0">{stars}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row justify-content-between">
                        <div className="d-flex flex-column">
                            <p className="fs-14 fw-400 color-default">
                                Valor da consulta: <strong className="fw-600 color-money">R${value}</strong>
                            </p>
                            <p className="fs-14 fw-400 color-default">
                                Canais de atendimento: <strong className="fw-600 color-blue">Jitsi</strong>
                            </p>
                        </div>
                        <div className="d-flex align-self-lg-end align-items-center mt-2">
                            <TimeIcon height={16} />
                            <p className="fs-14 fw-400 color-default">{time}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="schedules__form mt-5">
                <InputDate/>

                <p className="fs-16 fs-sm-20 fw-600 fw-sm-400 color-default mt-3">Modalidade:</p>
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
                <p className="fs-16 fs-sm-20 fw-600 fw-sm-400 color-default mt-3">Motivo da consulta:</p>
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
                <p className="fs-16 fs-sm-20 fw-600 fw-sm-400 color-default mt-3">Formas de pagamento:</p>
                <InputSelect options={[{ label: "Catão de crédito", value: "Catão de crédito" }, { label: "Boleto", value: "Boleto" }]} />

                <p className="fs-16 fs-sm-20 fw-600 fw-sm-400 color-default mt-3">Observações:</p>
                <InputArea name="comments" placeholder="Digite Observações..." />

                <p className="fs-16 fs-sm-20 fw-600 fw-sm-400 color-default mt-3">Anexos:</p>


                <InputFile accept={'image/*'} handleUpload={handleUpload} handleDelete={handleDelete} uploads={data.uploads} />
                
                <div className="d-flex justify-content-center justify-content-sm-start mt-5">
                    <Button label="agendar" color="blue" size="medium"/>
                    <Button label="Cancelar" color="red" size="medium"/>
                </div>
            </div>
        </div>
    );
};

export default Schedules;
