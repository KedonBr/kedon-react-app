import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Form } from "@unform/web";
import { cpfMask } from "../../../utils/mask";
import {
    Profile,
    Padlock,
} from "../../../shared/images";
import Input from "../../../components/input/input";
import * as Yup from "yup";
import { useSelector, useDispatch } from 'react-redux'
import { userType } from '../redux/actions';

const FormDoctor = () => {
    const dispatch = useDispatch()
    const formRef = useRef(null);
    const cpf = () => {
        const cpf = formRef.current.getFieldValue('cpf')
        formRef.current.setFieldValue('cpf', cpfMask(cpf))
    }
    const handleSubmit = async (data, { reset }) => {
        try {
            const schema = Yup.object().shape({
                cpf: Yup.string().required("Digite seu CPF!"),
                password: Yup.string().required("Digite sua senha!"),
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            console.log(data);
            formRef.current.setErrors({});
            reset();
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
                formRef.current.setErrors(errorMessages);
            }
        }
    };
    return (
        <React.Fragment>
            <h5 className="fs-20 fw-100 color-default mb-3">Login</h5>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <Input
                    name="cpf"
                    placeholder="Usuário (CPF)"
                    onChange={cpf}
                    icon={<Profile className="input__icon" />}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Senha"
                    icon={<Padlock className="input__icon" />}
                />
                <div className="d-flex justify-content-between align-items-center px-2 pb-2">
                    <label className="d-flex align-items-center">
                        <input type="checkbox" name="" />
                        <p className="fs-16 fw-400 color-default px-1">Lembrar-me</p>
                    </label>
                    <a href="#" className="fs-16 fw-400 color-blue">Esqueci a senha</a>
                </div>
                <button type="submit" className="button__dark">Entrar</button>
                <button className="button__light" onClick={() => dispatch(userType('PATIENT'))}>Sou paciente</button>
                <Link className="button__register" to="/cadastro">Cadastre-se</Link>
            </Form>
        </React.Fragment>
    )
}

export default FormDoctor