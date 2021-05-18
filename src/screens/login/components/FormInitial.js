import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { userType } from '../redux/actions';
const FormInitial = () => {
    const dispatch = useDispatch()
    return (
        <React.Fragment>
            <h5 className="fs-20 fw-100 color-default mb-3">Escolha uma opção</h5>

            <div className="d-flex flex-column">
                <button className="button__dark"  onClick={() => dispatch(userType('PATIENT'))}>
                    Sou paciente
                </button>
                <button className="button__dark" onClick={() => dispatch(userType('DOCTOR'))}>
                    Sou médico
                </button>
                <button className="button__dark" onClick={() => { console.log("Colocar componente de profissional em login") }}>
                    Sou profissional da saúde
                </button>
            </div>
        </React.Fragment>
    );
};

export default FormInitial;
