import React, { useState } from "react";
import { cpfMask, } from "../../utils/mask";
import { Input, InputCheckbox, Button } from '../../components';
import { Link } from 'react-router-dom';
import { FacebookCircle, GoogleCircle } from '../../shared/images'
import emailIsValid from "../../utils/email";
import cpfIsValid from "../../utils/cpf";
import "./register.scss";
const Register = () => {
    const [data, setData] = useState({
        name: "",
        surname: "",
        email: "",
        cpf: "",
        password: "",
        password_confirm: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        email: "",
        cpf: "",
        password: "",
        password_confirm: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.name.trim()) {
            errors.name = "Digite seu nome completo!";
        }
        if (!data.surname.trim()) {
            errors.surname = "Digite seu apelido!";
        }
        if (!data.email.trim()) {
            errors.email = "Digite seu Email!";
        } else if (!emailIsValid(data.email).isValid) {
            errors.email = "Este e-mail é inválido!";
            console.log("Email Inválido");
        }
        if (!data.cpf.trim()) {
            errors.cpf = "Digite seu CPF!";
        } else if (!cpfIsValid(data.cpf).isValid) {
            errors.cpf = "Este CPF é inválido!";
        }
        if (!data.password.trim()) {
            errors.password = "Digite uma senha!"
        } else if (data.password.length < 8) {
            errors.password = "A senha deve pelo menos 8 dígitos!"
        } else if (data.password_confirm !== data.password) {
            errors.password_confirm = "Os campos devem ser iguais!"
        }
        if (!data.password_confirm.trim()) {
            errors.password_confirm = "Digite sua senha novamente!"
        } else if (data.password_confirm !== data.password) {
            errors.password_confirm = "Os campos devem ser iguais!"
        }

        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: value,
        });
        console.log(data);
    };
    const handleCPF = (e) => {
        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: "",
        });
        setData({
            ...data,
            [name]: cpfMask(value),
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: "",
        });
        setData({
            ...data,
            [name]: value,
        });
    };
    return (
        <section className="container-fluid register">
            <div className="container d-flex justify-content-center py-5">
                <div className="col-12 col-md-8 col-lg-4 d-flex flex-column">
                    <Link>
                        <button className="register-social">
                            <FacebookCircle />
                            <p className="fs-18 fw-400 color-default text-center">Continuar com Facebook</p>
                        </button>
                    </Link>
                    <Link>
                        <button className="register-social">
                            <GoogleCircle />
                            <p className="fs-18 fw-400 color-default text-center">Continuar com Google</p>
                        </button>
                    </Link>
                    <div className="separator">
                        <p className="fs-20 fw-400 color-default text-center">ou</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Input
                            name="name"
                            placeholder="Nome Completo*"
                            onChange={handleChange}
                            value={data.name}
                            error={errors.name}
                        />
                        <Input
                            name="surname"
                            placeholder="Como quero ser chamado(a)"
                            onChange={handleChange}
                            value={data.surname}
                            error={errors.surname}
                        />
                        <Input
                            name="email"
                            placeholder="E-mail*"
                            onChange={handleChange}
                            value={data.email}
                            error={errors.email}
                        />
                        <Input
                            name="cpf"
                            placeholder="CPF*"
                            onChange={handleCPF}
                            value={data.cpf}
                            error={errors.cpf}
                        />
                        <Input
                            name="password"
                            placeholder="Escolher senha*"
                            type="password"
                            onChange={handleChange}
                            value={data.password}
                            error={errors.password}
                        />
                        <Input
                            name="password_confirm"
                            placeholder="Repita senha*"
                            type="password"
                            onChange={handleChange}
                            value={data.password_confirm}
                            error={errors.password_confirm}
                        />
                        <div className="col-12 mt-2">
                            <div className="px-2">
                                <InputCheckbox
                                    label="Assinar newsletter" />
                            </div>
                            <div className="px-2">
                                <InputCheckbox
                                    label="Ao preencher de seus dados, você aceita que a ehDoc
                            o contate para estender a você seus serviços.
                            Você pode solicitar a qualquer tempo a exclusão
                            de seus dados caso não deseje ser contatado."/>
                            </div>

                            <div className="mt-3">
                                <Button type="submit" label="Inscrever-se" color="blue" size="extra-large" />
                            </div>
                            <p className="fs-16 fw-400 color-default text-center px-2 mt-4">
                                Ao criar uma conta de usuário, você aceita os <Link className="color-blue fw-500" to="/termos-e-condicoes">termos e
                                    condições</Link> de uso da ehDoc e reconhece que leu e
                                entendeu nossa <Link className="color-blue fw-500" to="/politica-de-privacidade">política de privacidade.</Link>
                            </p>
                            <div className="separator py-5"></div>
                            <p className="fs-16 fw-400 color-default text-center px-2">
                                Se você já possui cadastro, <Link className="color-blue fw-500" to="/login">faça login em sua conta.</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
