import React, { useEffect, useState } from "react";
import { GoBack, Button, Input, Avatar, InputSelect, Header } from '../../../components';
import { cpfMask, rgMask, dateMask } from "../../../utils/mask";
import emailIsValid from "../../../utils/email";
import cpfIsValid from "../../../utils/cpf";
import './editProfile.scss';
import { estados } from "../../../screens/register/utils/estados";
import { cidades } from "../../../screens/register/utils/cidades";
const EditProfile = () => {
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [data, setData] = useState({
        name: "",
        email: "",
        rg: "",
        cpf: "",
        birth_date: "",
        state: "",
        city: "",
        rg: "",
        health_plan: "",
        voucher: "",
        health_insurance: "",
        registration_agreement: "",
        allergies: "",
        blood_type: "",
        password: "",
        password_confirm: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        rg: "",
        cpf: "",
        birth_date: "",
        state: "",
        city: "",
        rg: "",
        health_plan: "",
        voucher: "",
        health_insurance: "",
        registration_agreement: "",
        allergies: "",
        blood_type: "",
        password: "",
        password_confirm: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.name.trim()) {
            errors.name = "Digite seu CPF!";
        }
        if (!data.email.trim()) {
            errors.email = "Digite sua senha!";
        } else if (!emailIsValid(data.email).isValid) {
            errors.email = "Este e-mail é inválido!";
            console.log("Email Inválido");
        }
        if (!data.rg.trim()) {
            errors.rg = "Digite seu RG!";
        }
        if (!data.cpf.trim()) {
            errors.cpf = "Digite seu CPF!";
        } else if (!cpfIsValid(data.cpf).isValid) {
            errors.cpf = "Este CPF é inválido!";
        }
        if (!data.birth_date.trim()) {
            errors.birth_date = "Digite sua data de nascimento!";
        } else if (data.birth_date.length < 10) {
            errors.birth_date = "Esta data é inválida!";
        }
        if (!data.state.trim()) {
            errors.state = "Selecione seu estado!"
        }
        if (!data.city.trim()) {
            errors.city = "Selecione sua cidade!"
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

    const handleState = (e) => {
        const { value } = e;
        setErrors({
            ...errors,
            state: "",
        });
        setData({
            ...data,
            state: value,
        });
        setCities(cidades.filter((city) => city.estado == e.id));
    };
    const handleCity = (e) => {
        const { value } = e;
        setErrors({
            ...errors,
            city: "",
        });
        setData({
            ...data,
            city: value,
        });
    };
    const handleDate = (e) => {
        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: "",
        });
        setData({
            ...data,
            [name]: dateMask(value),
        });
    };
    const handleRG = (e) => {
        const { name, value } = e.target;
        setErrors({
            ...errors,
            [name]: "",
        });
        setData({
            ...data,
            [name]: rgMask(value),
        });
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
    useEffect(() => {
        setStates(estados);
    }, []);
    return (
        <React.Fragment>
            <Header title="Editar Perfil" />

            <div className="section">
                <main className="content-center">
                    <p className="fs-18 fw-400 color-default mx-2 my-3">Plano familiar</p>
                    <div className="d-flex flex-column flex-sm-row align-items-sm-center">
                        <Button label="Adicionar Membro" color="blue" size="large" />
                        <Button label="Alterar Plano" color="light" size="large" />
                    </div>
                    <p className="fs-18 fw-400 color-default mx-2 my-3">Plano: Família Mensal (até 4 pessoas) - R$ 20,00 - Homologado</p>
                    <form onSubmit={handleSubmit}>
                        <Input
                            name="name"
                            placeholder="Nome Completo*"
                            onChange={handleChange}
                            value={data.name}
                            error={errors.name}
                        />
                        <Input
                            name="email"
                            placeholder="E-mail*"
                            onChange={handleChange}
                            value={data.email}
                            error={errors.email}
                        />
                        <Input
                            name="rg"
                            placeholder="RG*"
                            onChange={handleRG}
                            value={data.rg}
                            error={errors.rg}
                        />
                        <Input
                            name="cpf"
                            placeholder="CPF*"
                            onChange={handleCPF}
                            value={data.cpf}
                            error={errors.cpf}
                        />
                        <Input
                            name="birth_date"
                            placeholder="Data de Nascimento*"
                            onChange={handleDate}
                            value={data.birth_date}
                            error={errors.birth_date}
                        />
                        <InputSelect
                            name="state"
                            placeholder="Estado*"
                            options={states}
                            onChange={handleState}
                            error={errors.state}
                        />
                        <InputSelect
                            name="city"
                            placeholder="Cidade*"
                            options={cities}
                            onChange={handleCity}
                            error={errors.city}
                        />
                        <Input
                            name="health_plan"
                            placeholder="Plano de Saúde"
                            onChange={handleChange}
                            value={data.health_plan}
                            error={errors.health_plan}
                        />
                        <Input
                            name="voucher"
                            placeholder="Voucher"
                            onChange={handleChange}
                            value={data.voucher}
                            error={errors.voucher}
                        />
                        <Input
                            name="health_insurance"
                            placeholder="Convênio"
                            onChange={handleChange}
                            value={data.health_insurance}
                            error={errors.health_insurance}
                        />
                        <Input
                            name="registration_agreement"
                            placeholder="Matrícula convênio"
                            onChange={handleChange}
                            value={data.registration_agreement}
                            error={errors.registration_agreement}
                        />
                        <Input
                            name="allergies"
                            placeholder="Alergias"
                            onChange={handleChange}
                            value={data.allergies}
                            error={errors.allergies}
                        />
                        <Input
                            name="blood_type"
                            placeholder="Tipo sanguíneo"
                            onChange={handleChange}
                            value={data.blood_type}
                            error={errors.blood_type}
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
                        <div className="d-flex flex-column flex-sm-row mt-3">
                            <Button type="submit" label="Salvar Alterações" color="blue" size="extra-large" />
                            <Button type="submit" label="Solicitar exclusão dos meu dados" color="red" size="extra-large" />
                        </div>
                    </form>
                </main>
            </div>
        </React.Fragment>
    )
}

export default EditProfile