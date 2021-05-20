import React, { useRef, useState } from "react";
import Input from "../../components/input/input";
import { cpfMask } from '../../utils/mask'
import cpfIsValid from '../../utils/cpf'
import {
  BannerPatient,
  BannerDoctor,
  BorderBanner,
  Profile,
  Padlock,
  Stethoscope
} from "../../shared/images";
import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => {
  const [userType, setUserType] = useState(true)
  const [data, setData] = useState({
    cpf: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    cpf: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.cpf.trim()) {
      errors.cpf = "Digite seu CPF!"
    } else if (!cpfIsValid(data.cpf).isValid) {
      errors.cpf = "CPF inválido!"
    }
    if (!data.password.trim()) {
      errors.password = "Digite sua senha!"
    }
    const { name, value } = e.target

    setErrors({
      ...errors,
      [name]: value
    })

    console.log()
  }
  const handleCPF = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: cpfMask(value)
    })
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setData({
      ...data,
      [name]: value
    })
    setErrors({
      ...errors,
      [name]: ''
    })
  }

  return (
    <section className="container py-5">
      <div className="row py-sm-5">
        <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center">
          <div className="col-12 col-xl-6">
            <h5 className="fs-20 fw-100 color-default mb-3">
              Escolha uma opção
            </h5>
            <form onSubmit={handleSubmit}>
              <div className="user-type mb-2">
                <label>
                  <input type="radio" name="user-type" onClick={() => setUserType(true)} defaultChecked />
                  <span className="user-type__button button-patient">Sou Paciente</span>
                </label>
                <label>
                  <input type="radio" name="user-type" onClick={() => setUserType(false)}/>
                  <span className="user-type__button button-doctor">Sou Médico</span>
                </label>
              </div>

              <Input
                name="cpf"
                placeholder="Usuário (CPF)"
                onChange={handleCPF}
                value={data.cpf}
                error={errors.cpf}
                icon={<Profile className="input__icon" />}
              />
              <Input
                name="password"
                placeholder="Senha"
                onChange={handleChange}
                value={data.password}
                error={errors.password}
                icon={<Padlock className="input__icon" />}
                type="password"
              />
              <div className="d-flex justify-content-between align-items-center px-2 pb-2">
                <label className="d-flex align-items-center">
                  <input type="checkbox" name="" />
                  <p className="fs-16 fw-400 color-default px-1">Lembrar-me</p>
                </label>
                <Link to="/recuperar-senha" className="fs-16 fw-400 color-blue">Esqueci a senha</Link>
              </div>
              <button type="submit" className="button__dark">Entrar</button>
              <Link className="button__register" to="/cadastro">Cadastre-se</Link>
            </form>
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start align-items-center order-first order-sm-0">
          <div className="col-10 col-sm-12 col-xl-8 banner">
            {
              userType ?
                <React.Fragment>
                  <BannerPatient width="100%" />
                  <div className="banner__border">
                    <BorderBanner />
                  </div>
                </React.Fragment>
                :
                <React.Fragment>
                  <BannerDoctor width="100%" />
                  <div className="banner__border">
                    <BorderBanner />
                  </div>
                </React.Fragment>
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
