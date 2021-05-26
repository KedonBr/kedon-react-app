import React, { useState } from "react";
import { Input, Button } from '../../components'
import { cpfMask, phoneMask, dateMask } from "../../utils/mask";
import { Logo, ChipCreditCard } from "../../shared/images";
import cpfIsValid from '../../utils/cpf';
import "./payment.scss";

const Payment = () => {
    const [cardStyle, setCardStyle] = useState(false);
    const [data, setData] = useState({
        card_number: "",
        expiration_date: "",
        security_code: "",
        full_name: "",
        cpf: "",
        telephone: "",
        birth_date: "",
    });
    const [error, setError] = useState({
        card_number: "",
        expiration_date: "",
        security_code: "",
        full_name: "",
        cpf: "",
        telephone: "",
        birth_date: "",
    });
    const handleCardNumber = (e) => {
        const maskCard = (value) => {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{4})(\d)/, "$1 $2")
                .replace(/(\d{4})(\d)/, "$1 $2")
                .replace(/(\d{4})(\d)/, "$1 $2")
                .replace(/(\d{4})(\d{1,2})/, "$1");
        };
        const { name, value } = e.target;
        console.log(name, value);
        setData({
            ...data,
            [name]: maskCard(value),
        });
        setError({
            ...error,
            [name]: '',
        })
    };

    const handleExpirationDate = (e) => {
        const maskExpirationDate = (value) => {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "$1/$2")
                .replace(/(\d{2})(\d{1,2})/, "$1");
        };
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: maskExpirationDate(value),
        });
        setError({
            ...error,
            [name]: '',
        })
    };

    const handleSecurityCode = (e) => {
        const maskSecurityCode = (value) => {
            return value.replace(/\D/g, "").replace(/(\d{3})(\d{1,2})/, "$1");
        };
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: maskSecurityCode(value),
        });
        setError({
            ...error,
            [name]: '',
        })
    };
    const handleCPF = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: cpfMask(value),
        });
        setError({
            ...error,
            [name]: '',
        })
    };
    const handleTelephone = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: phoneMask(value),
        });
        setError({
            ...error,
            [name]: '',
        })
    };
    const handleBirthDate = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: dateMask(value),
        });
        setError({
            ...error,
            [name]: '',
        })
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
        setError({
            ...error,
            [name]: '',
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.card_number.trim()) {
            error.card_number = "Digite o número do Cartão!"
        }
        if (!data.expiration_date.trim()) {
            error.expiration_date = "Digite a data de validade do Cartão!"
        }
        if (!data.security_code.trim()) {
            error.security_code = "Digite o código de segurança do Cartão!"
        }
        if (!data.full_name.trim()) {
            error.full_name = "Digite o nome do titular do Cartão!"
        }
        if (!data.cpf.trim()) {
            error.cpf = "Digite o CPF!"
        } else if (!cpfIsValid(data.cpf).isValid) {
            error.cpf = "CPF inválido!"
        }
        if (!data.telephone.trim()) {
            error.telephone = "Digite seu telefone!"
        }
        if (!data.birth_date.trim()) {
            error.birth_date = "Digite sua data de nascimento!"
        }

        const { name, value } = e.target

        setError({
            ...error,
            [name]: value
        })

        console.log(data);
    };
    return (
        <div className="section">
            <h1 className="fs-24 fw-400 color-black px-2">Pagamento</h1>
            <div className="d-flex flex-column flex-xl-row py-5">
                <div className="col-xl-5 d-flex justify-content-end py-3">
                    <form className="payment-form" onSubmit={handleSubmit}>
                        <Input
                            name="card_number"
                            placeholder="Número do cartão"
                            label="Número do cartão"
                            value={data.card_number}
                            error={error.card_number}
                            onChange={handleCardNumber}
                        />
                        <div className="d-flex">
                            <Input
                                name="expiration_date"
                                placeholder="MM/AA"
                                label="Validade"
                                value={data.expiration_date}
                                error={error.expiration_date}
                                onChange={handleExpirationDate}
                            />
                            <Input
                                onFocus={() => setCardStyle(true)}
                                onBlur={() => setCardStyle(false)}
                                name="security_code"
                                placeholder="CVV"
                                label="CVV"
                                value={data.security_code}
                                error={error.security_code}
                                onChange={handleSecurityCode}
                            />
                        </div>
                        <Input
                            name="full_name"
                            placeholder="Nome Completo"
                            label="Nome do titular"
                            value={data.full_name}
                            error={error.full_name}
                            onChange={handleChange}
                        />
                        <Input
                            name="cpf"
                            placeholder="___.___.___-__"
                            label="CPF"
                            value={data.cpf}
                            error={error.cpf}
                            onChange={handleCPF}
                        />
                        <div className="d-flex">
                            <Input
                                name="telephone"
                                placeholder="(__)_____-____"
                                label="Telefone"
                                value={data.telephone}
                                error={error.telephone}
                                onChange={handleTelephone}
                            />
                            <Input
                                name="birth_date"
                                placeholder="DD/MM/AAAA"
                                label="Data de nascimento"
                                value={data.birth_date}
                                error={error.birth_date}
                                onChange={handleBirthDate}
                            />
                        </div>
                        <label>
                            <p className="fs-18 fw-400 color-default">Parcelas</p>
                            <select>
                                <option>1x de R$ 0,00 sem juros</option>
                            </select>
                        </label>
                        <div className="mt-3">
                        <Button type="submit" label="Confirmar Pagamento" color="blue" size="extra-large"/>
                        </div>
                    </form>
                </div>
                <div className="col-xl-7 d-flex align-items-center justify-content-center order-first order-xl-0 py-3">
                    <div className={!cardStyle ? "card-credit" : "card-credit focus"}>
                        <div className="face front p-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex flex-column">
                                    <h3 className="fs-16 fs-md-20 fw-400 color-white">Cartão de crédito</h3>
                                </div>
                                <div className="front__logo">
                                    {window.innerWidth < 768 ?
                                        <Logo width={50} height={30} />
                                        :
                                        <Logo width={80} height={50} />
                                    }
                                </div>
                            </div>
                            <ChipCreditCard width={40} height={40} />
                            <p className="fs-12 fs-md-16 fw-600 color-white orbitron mt-2">
                                {!data.card_number.trim() ? "**** **** ****  ****" : data.card_number}
                            </p>
                            <p className="valid-thru fs-12 fs-md-16 fw-500 color-white d-flex align-items-center mt-2">
                                <span> VALID <br /> THRU</span>
                                {!data.expiration_date.trim() ? "MM/AA" : data.expiration_date}
                            </p>
                            <p className="fs-12 fs-md-16 fw-500 color-white uppercase mt-2" style={{ letterSpacing: 5 }}>
                                {!data.full_name.trim() ? "NOME COMPLETO" : data.full_name}
                            </p>
                        </div>
                        <div className="face back p-3">
                            <span className="blackbar"></span>
                            <div className="d-flex flex-column">
                                <p className="fs-14 fw-400 color-white">Assinatura autorizada não é válida a menos que seja assinada</p>
                                <div className="d-flex align-items-center mt-3">
                                    <span className="whitebar"></span>
                                    <p className="fs-12 fs-md-16 ccv">
                                        {!data.security_code.trim() ? "CVV" : data.security_code}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
