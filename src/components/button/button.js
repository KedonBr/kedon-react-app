import React from 'react';
import './button.scss';

const Button = ({ label, color, size, ...rest}) => {
    return (
        <button className={'button button__' + color + ' ' + 'size__' + size} {...rest}>
            {label}
        </button>
    )
}

export default Button