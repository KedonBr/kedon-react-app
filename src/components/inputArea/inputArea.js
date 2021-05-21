import React from 'react';
import './inputArea.scss'

const InputArea = ({name, error, ...rest}) => {
    return(
        <React.Fragment>
            <span className="fs-14 fw-400 color-red mx-2 d-block pb-1">{error}</span>
            <label className="input-area" style={error && error ? {borderColor: '#fd7676'} : null}>
                <textarea name={name} className="input-area__area" rows="4" {...rest} />
            </label>
        </React.Fragment>
    )
}

export default InputArea