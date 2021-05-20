import React from 'react';
import './input.scss'
const Input = ({ name, icon, error, ...rest }) => {
    return (
        <div>
            <span className="fs-14 fw-400 color-red mx-2 d-block pb-1">{error}</span>
            <label className="input" style={error && error ? {borderColor: '#fd7676'} : null}>
                {icon}
                <input name={name} className="input__text" {...rest} />
            </label>
        </div>
    )
}

export default Input;