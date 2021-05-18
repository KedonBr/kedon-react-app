import React, { useRef, useState } from "react";
import { FormInitial, FormPatient, FormDoctor } from './components'
import {
  BannerPatient,
  BannerDoctor,
  BorderBanner,
} from "../../shared/images";
import "./login.scss";
import { useSelector, useDispatch } from 'react-redux'
import { userType } from './redux/actions';
const Login = () => {
  const loginReducer = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  return (
    <section className="container py-5">
      <div className="row py-sm-5">
        <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center">
          <div className="col-12 col-xl-6">
            {loginReducer.userType === 'INITIAL' ? <FormInitial /> : null}
            {loginReducer.userType === 'DOCTOR' ? <FormDoctor /> : null}
            {loginReducer.userType === 'PATIENT' ? <FormPatient /> : null}
          </div>
        </div>
        <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start align-items-center order-first order-sm-0">
          <div className="col-10 col-sm-12 col-xl-8 banner">
            {
              loginReducer.userType === 'DOCTOR' ?
                <React.Fragment>
                  <BannerDoctor width="100%" />
                  <div className="banner__border">
                    <BorderBanner />
                  </div>
                </React.Fragment>
                :
                <React.Fragment>
                  <BannerPatient width="100%" />
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
