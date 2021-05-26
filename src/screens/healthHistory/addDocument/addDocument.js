import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Goback } from "../../../shared/images";
import { dateMask } from '../../../utils/mask'
import bytesToSize from '../../../utils/bytesToSize'
import Button from "../../../components/button/button";
import Input from "../../../components/input/input";
import InputSelect from "../../../components/inputSelect/inputSelect";
import InputFile from "../../../components/inputFile/inputFile";

import "./addDocument.scss";

const options = [
    { label: "Prontuário", value: "Prontuário" },
    { label: "Exame", value: "Exame" },
    { label: "Receita", value: "Receita" },
];
const AddDocument = () => {
    const [data, setData] = useState({
        CRM: "",
        date: "",
        file_name: "",
        type: "",
        uploads: [],
    });
    const [error, setError] = useState({
        CRM: "",
        date: "",
        file_name: "",
        type: "",
        uploads: "",
    });
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
        setError({
            ...error,
            uploads: ""
        })
    }
    const handleDelete = (id) => {
        const NewUploads = data.uploads.filter(item => (item.id !== id))
        console.log(NewUploads)
        setData({
            ...data,
            uploads: NewUploads
        })
    }
    const handleSelect = (e) => {
        
        setData({
            ...data,
            type: e.value,
        });
        setError({
            ...error,
            type: ""
        })
    }
    const handleDate = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: dateMask(value)
        })
        setError({
            ...error,
            [name]: ""
        })
    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value,
        });
        setError({
            ...data,
            [name]: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!data.CRM.trim()){
            error.CRM = "Digite o CRM do seu médico!";
        }
        if(!data.file_name.trim()){
            error.file_name = "Digite o nome do arquivo!";
        }
        if(!data.type.trim()){
            error.type = "Selecione o tipo exame!";
        }
        if(data.uploads.length <=0){
            error.uploads = "Arraste o arquivo do exame!";
        }
        const { name, value } = e.target;
        setError({
            ...error,
            [name]: value,
        });
        console.log(data)
    };
    return (
        <div className="section">
            <div className="container">
                <Link to="/historico-de-saude"
                    className="fs-20 fw-400 color-default d-flex align-items-center">
                    <Goback height={25} width={25} className="mx-2" />
                    Voltar
                </Link>
                <h2 className="fs-18 fs-sm-24 fw-400 color-default mx-2 mt-5">
                    Adicionar novo documento:
                </h2>
                <form className="mt-3" onSubmit={handleSubmit}>
                    <Input
                        name="CRM"
                        placeholder="CRM do médico*"
                        onChange={handleChange}
                        value={data.CRM}
                        error={error.CRM}
                    />
                    <Input
                        name="date"
                        placeholder="Realizado em:"
                        onChange={handleDate}
                        value={data.date}
                    />
                    <Input
                        name="file_name"
                        placeholder="Nome do arquivo*"
                        onChange={handleChange}
                        value={data.file_name}
                        error={error.file_name}
                    />
                    <InputSelect
                        name="type"
                        placeholder="Tipo de exame*"
                        options={options}
                        onChange={handleSelect}
                        error={error.type}
                    />
                    <p className="fs-16 fs-sm-20 fw-400 color-default mx-2">Anexo:</p>
                    <InputFile
                        name="file"
                        accept="image/*,application/pdf"
                        handleUpload={handleUpload}
                        handleDelete={handleDelete}
                        uploads={data.uploads}
                        error={error.uploads}
                        />
                    <div className="mt-5">
                        <Button
                            type="submit"
                            label="Salvar"
                            color="blue"
                            size="large"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDocument;
