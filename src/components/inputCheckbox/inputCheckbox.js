import React from 'react';
import './inputCheckbox.scss'

const InputCheckbox = ({label, ...rest}) => {
    return(
        <label className="input-checkbox d-flex align-items-start py-1"> 
            <input type="checkbox" {...rest}/>
            <span></span>
            <p className="fs-16 fw-400 color-default px-2">{label}</p>
            
        </label>
    )
}

export default InputCheckbox;