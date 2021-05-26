import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { UploadFile, Archive, Trash } from "../../shared/images";
import "./inputFile.scss";

const InputFile = ({ accept, handleUpload,handleDelete, uploads, error }) => {
    const [messageStyle, setMessageStyle] = useState();
    const [iconStyle, setIconStyle] = useState();
    const renderDragMessage = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            setMessageStyle("#c5c5c5");
            setIconStyle('icon--default')
            return (
                <p className="fs-16 fs-sm-20 fw-400 color-default text-center">
                    Arraste os arquivos aqui...
                </p>
            );
        }
        if (isDragReject) {
            setMessageStyle("#fd7676");
            setIconStyle('icon--red')
            return (
                <p className="fs-16 fs-sm-20 fw-400 color-default text-center"
                    style={{ color: messageStyle }}>
                    Arquivo não suportado!
                </p>
            );
        }
        setMessageStyle("#69c95e");
        setIconStyle('icon--green')
        return (
            <p className="fs-16 fs-sm-20 fw-400 color-default text-center"
                style={{ color: messageStyle }}>
                Solte os arquivos aqui
            </p>
        );
    };
    return (
        <React.Fragment>
            <ul className="upload">
                {uploads.map(file => (
                    <li className="upload__item d-flex justify-content-between align-items-center py-2" key={file.id}>
                        <div className="d-flex align-items-center">
                            <Archive height={35} width={35} className="mx-2" />
                            <div className="d-flex flex-column">
                                <p className="upload__item--name fs-16 fw-500 color-default">{file.name}</p>
                                <small className="fs-14 fw-500 color-black">{file.size}</small>
                            </div>
                        </div>
                        <button className="trash" onClick={() => handleDelete(file.id)}>
                            <Trash height={20} width={20} />
                        </button>
                    </li>
                ))}
            </ul>
            {error && (
                <span className="d-block fs-14 fw-400 color-red px-2 pb-1">
                    {error}
                </span>
            )}
            <Dropzone accept={accept} onDropAccepted={handleUpload} multiple={false}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                    <div
                        className="drop-container"
                        style={{ borderColor: messageStyle }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <div className="d-flex flex-column align-items-center">
                            <UploadFile width={40} height={40} className={iconStyle} />
                            {renderDragMessage(isDragActive, isDragReject)}
                        </div>
                    </div>
                )}
            </Dropzone>
        </React.Fragment>
    );
};

export default InputFile;
