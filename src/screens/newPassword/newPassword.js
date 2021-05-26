import React, { useState } from "react";
import { Logo } from "../../shared/images";
import { Link } from "react-router-dom";
import { Input, Button } from '../../components'
import "./newPassword.scss";

const NewPassword = () => {
    const [data, setData] = useState({
        password: "",
        password_confirm: "",
    });
    const [error, setError] = useState({
        password: "",
        password_confirm: "",
    });
    const handlePassword = (e) => {
        const { name, value } = e.target;
        setError({
            ...error,
            [name]: '',
        });
        setData({
            ...data,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!data.password.trim()){
            error.password = "Digite sua Senha!"
        } else if(data.password.length < 8){
            error.password = "A senha deve ter pelo menos 8 dígitos!"
        }
        if(!data.password_confirm.trim()){
            error.password_confirm = "Repita sua Senha!"
        } else if(data.password_confirm !== data.password){
            error.password_confirm = "Os campos devem ser iguais!"
        } 

        const { name, value } = e.target;
        setError({
            ...error,
            [name]: value,
        });
    };
    return (
        <div className="container d-flex justify-content-center align-items-center py-5">
            <div className="new-password-content col-5 d-flex flex-column align-items-center justify-content-between py-5">
                <Logo width={150} />
                <h1 className="fs-24 fw-400 color-black align-self-start px-5">
                    Configure sua nova Senha
                </h1>
                <p className="fs-16 fw-400 color-black align-self-start px-5 mt-2">
                    Defina sua nova senha padrão de pelo menos 8 dígitos, para efetuar o Login.
                </p>
                <form className="new-password-content__form" onSubmit={handleSubmit}>
                    <Input
                        name="password"
                        placeholder="Digite sua nova senha"
                        onChange={handlePassword}
                        value={data.password}
                        error={error.password}
                        type="password"
                    />
                    {data.password.length >= 8 ? (
                        <Input
                            name="password_confirm"
                            placeholder="Repita sua nova senha"
                            onChange={handlePassword}
                            value={data.password_confirm}
                            error={error.password_confirm}
                            type="password"
                        />
                    ) : null}

                    <div className="d-flex align-self-stretch justify-content-end align-items-center mt-3">
                        <Button type={data.password.length >= 8 ? "submit" : "button"} label="Definir Senha" color={data.password.length >= 8 ? "green" : "gray"} size="small" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewPassword;
