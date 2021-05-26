import React from 'react';
import './input.scss'
const Input = ({ name, icon, error, label, ...rest }) => {
    return (
        <label className="input__content">
            {label && label ? <p className="fs-14 fs-md-16 fw-400 color-default mx-2">{label}</p> : null}
            {error && error ? <span className="fs-14 fw-400 color-red mx-2 d-block">{error}</span> : null}
            <label className="input mt-1" style={error && error ? {borderColor: '#fd7676', backgroundColor: 'rgb(253, 118, 118, 0.05)'} : null}>
                {icon}
                <input name={name} className="input__text fs-14 fs-md-18" {...rest} />
            </label>
        </label>
    )
}

export default Input;