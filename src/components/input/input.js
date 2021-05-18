import React, { useEffect, useRef, useState } from 'react';
import { useField } from '@unform/core'
import './input.scss'
const Input = ({ name, icon, ...rest }) => {

    const inputRef = useRef(null)
    const { fieldName, registerField, defaultValue, error } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        })
    }, [fieldName, registerField]);
    return (
        <div>
            {error && <span className="d-block fs-14 fw-400 color-red px-2 pb-1">{error}</span>}
            <label className="input">
                {icon}
                <input className="input__text" ref={inputRef} {...rest} />
            </label>
        </div>
    )
}

export default Input;