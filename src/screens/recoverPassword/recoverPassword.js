import React, { useState } from 'react';
import Input from '../../components/input/input';
import { Logo } from '../../shared/images'
import { cpfMask } from '../../utils/mask';
import cpfIsValid from '../../utils/cpf'
import './recoverPassword.scss'
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    const [CPF, setCPF] = useState('');
    const [error, setError] = useState('');
    const handleCPF = (e) => {
        setCPF(cpfMask(e.target.value))
        setError("")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!cpfIsValid(CPF).isValid) {
            setError("CPF inválido!")
        }
        console.log(CPF.length)
    }
    return (
        <div className="container d-flex justify-content-center align-items-center py-5">
            <div className="recover-content col-5 d-flex flex-column align-items-center justify-content-between py-5">
                <Logo width={150} />
                <h1 className="fs-24 fw-400 color-black align-self-start px-5">Recupere sua senha</h1>
                <p className="fs-16 fw-400 color-black align-self-start px-5 mt-2">
                    Insira seu CPF, enviaremos para seu E-mail instruções para recuperar a senha!
                </p>
                <form className="recover-content__form" onSubmit={handleSubmit}>
                    <Input
                        name="cpf"
                        placeholder="Digite seu CPF"
                        onChange={handleCPF}
                        value={CPF}
                        error={error}
                    />
                    <div className="d-flex align-self-stretch justify-content-between align-items-center mt-3">
                        <Link to="login" className="button__dark">Voltar para Login</Link>
                        <button type={CPF.length < 14 ? 'button' : 'submit'} className={CPF.length < 14 ? 'button__inactive' : 'button__active'}>Recuperar Senha</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword