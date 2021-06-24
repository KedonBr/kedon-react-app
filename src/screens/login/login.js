import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button"
import emailIsValid from '../../utils/email'
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
  let history = useHistory();
  const [userType, setUserType] = useState(true)
  const [data, setData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!data.email.trim()) {
      errors.email = "Digite seu E-mail!"
    } else if (!emailIsValid(data.email).isValid) {
      errors.email = "E-mail inválido!"
    }
    if (!data.password.trim()) {
      errors.password = "Digite sua senha!"
    }
    const { name, value } = e.target

    setErrors({
      ...errors,
      [name]: value
    })
    history.push('/home')
  }
  const handleEmail = (e) => {
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
    <section className="container-fluid py-5 login">
      <div className="container py-5">
        <div className="row py-sm-5">
          <div className="col-12 col-md-8 d-flex justify-content-start align-items-center py-5">
            <div className="col-12 col-xl-8">
              <div className="user-type">
                <label>
                  <input type="radio" name="user-type" onClick={() => setUserType(true)} defaultChecked />
                  <span className="user-type__button button-patient">Usuários</span>
                </label>
                <label>
                  <input type="radio" name="user-type" onClick={() => setUserType(false)} />
                  <span className="user-type__button button-doctor">Médicos</span>
                </label>
              </div>
              <form onSubmit={handleSubmit}>
                <Input
                  name="email"
                  placeholder="Usuário (E-mail)"
                  onChange={handleEmail}
                  value={data.email}
                  error={errors.email}
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
                  <Link to="/recuperar-senha" className="fs-16 fw-600 color-blue font-nunito">Esqueci a senha</Link>
                </div>
                <Button type="submit" label="Entrar" color="blue" size="extra-large" />
                <Link to="/cadastro">
                  <p className="fs-18 fw-500 color-blue font-nunito text-center">Ainda não tem conta? <strong className="fw-600">Cadastre-se.</strong></p>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
