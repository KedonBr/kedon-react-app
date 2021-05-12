import React from "react";
import Input from '../../components/input/input';
import { Form } from '@unform/web'
import { BannerPatient, BorderBanner } from "../../shared/images";
import './login.scss'
const Login = () => {
  const handleSubmit = (data) => {
    console.log(data)
}
  return (
    <section className="container">
      <div className="row">
        <div className="col-6">
            <Form onSubmit={handleSubmit}>
                <Input name="user"/>
                <Input type="password" name="password"/>
                <button type="submit">Entrar</button>
            </Form>
        </div>
        <div className="col-6">
          <div className="banner">
            <BannerPatient width="100%" />
            <div className="banner__border">
              <BorderBanner />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
