import React, { useEffect, useRef, useState } from "react";
import { Form } from "@unform/web";
import { cpfMask, rgMask, dateMask } from "../../utils/mask";
import Input from "../../components/input/input";
import InputSelect from "../../components/inputSelect/inputSelect"
import * as Yup from "yup";
import './register.scss';
import { estados } from './utils/estados'
import { cidades } from './utils/cidades'
import validateCPF from '../../utils/cpf'
const Register = () => {
    const [states, setStates] = useState([])
    const [stateId, setStateId] = useState()
    const [cities, setCities] = useState([])
    const formRef = useRef(null);
    const handlerError = (name) => {
        formRef.current.setFieldError(`${name}`, '');
    }
    const rg = (name) => {
        const rg = formRef.current.getFieldValue(`${name}`)
        formRef.current.setFieldValue(`${name}`, rgMask(rg))
        formRef.current.setFieldError(`${name}`, '');
    }
    const cpf = (name) => {
        const cpf = formRef.current.getFieldValue(`${name}`)
        formRef.current.setFieldValue(`${name}`, cpfMask(cpf))
        const cpfIsValid = validateCPF(cpf)
        if (!cpfIsValid.isValid) {
            console.log(validateCPF().messageInvalid)
            formRef.current.setFieldError('cpf', cpfIsValid.messageInvalid);
        } else {
            formRef.current.setFieldError(`${name}`, '')
        }
    }
    const date = (name) => {
        const date = formRef.current.getFieldValue(`${name}`)
        formRef.current.setFieldValue(`${name}`, dateMask(date))
        formRef.current.setFieldError(`${name}`, '');
    }
    function select(e) {
        console.log(e.id)
        setCities(cidades.filter(city => (city.estado == e.id)))
        formRef.current.setFieldError('state', '');
    }
    const handleSubmit = async (data, { reset }) => {
        console.log(data)
        const password = formRef.current.getFieldValue('password')
        const password_confirm = formRef.current.getFieldValue('password_confirm')
        if (password !== password_confirm) {
            formRef.current.setFieldError('password_confirm', 'Os dois campos de senha devem ser iguais');
            console.log('diferentes')
        } else {

            try {
                const schema = Yup.object().shape({
                    name: Yup.string().required("Digite seu Nome!"),
                    email: Yup.string().email("Digite um Email Válido!").required("Digite seu E-mail!"),
                    rg: Yup.string().required("Digite seu RG!"),
                    cpf: Yup.string().required("Digite seu CPF!"),
                    data_od_birth: Yup.string().required("Coloque sua data de nascimento!"),
                    state: Yup.string().required("Digite seu estado!"),
                    city: Yup.string().required("Digite sua cidade!"),
                    password: Yup.string().min(8, 'No minimo 8 caracteres!').required("Digite sua senha!"),
                    password_confirm: Yup.string().required("Digite sua senha!"),
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
        }

    };
    useEffect(() => {
        setStates(estados)
    }, [])
    return (
        <section className="container d-flex justify-content-center py-5">
            <div class="col-6 d-flex flex-column">
                <span className="fs-16 fw-400 color-default py-3 px-2">
                    Login | Cadastro
        </span>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input name="name" placeholder="Nome Completo*" onChange={() => handlerError('name')} />
                    <Input name="email" placeholder="E-mail*" onChange={() => handlerError('email')} />
                    <Input name="rg" placeholder="RG*" onChange={() => rg('rg')} />
                    <Input name="cpf" placeholder="CPF*" onChange={() => cpf('cpf')} />
                    <Input name="data_od_birth" placeholder="Data de Nascimento*" onChange={() => date('data_od_birth')} />
                    <InputSelect name="state" placeholder="Estado*" options={states} onChange={(e) => select(e)} />
                    <InputSelect name="city" placeholder="Cidade*" options={cities} onChange={() => handlerError('city')} />
                    <Input name="health_plan" placeholder="Plano de Saúde" />
                    <Input name="voucher" placeholder="Voucher" />
                    <Input name="health_insurance" placeholder="Convênio" />
                    <Input
                        name="registration_agreement"
                        placeholder="Matrícula convênio"
                    />
                    <Input name="allergies" placeholder="Alergias" />
                    <Input name="blood_type" placeholder="Tipo sanguíneo" onChange={() => handlerError('blood_type')} />
                    <Input name="password" placeholder="Escolher senha*" type="password" onChange={() => handlerError('password')} />
                    <Input name="password_confirm" placeholder="Repita senha*" type="password" onChange={() => handlerError('password_confirm')} />
                    <div className="col-8 mt-3">
                        <label className="d-flex align-items-center px-2">
                            <input type="checkbox" name="" />
                            <p className="fs-16 fw-400 color-default px-2">
                                Assinar newsletter
              </p>
                        </label>
                        <label className="d-flex align-items-center mt-2 px-2">
                            <input className="mb-4" type="checkbox" name="" />
                            <p className="fs-16 fw-400 color-default px-2">
                                Declaro que li e estou ciente dos termos e condições de uso
              </p>
                        </label>
                        <button type="submit" className="button__dark mt-3">Cadastrar</button>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default Register;
