import React from "react";
import Select from "react-select";
import "./inputSelect.scss";
const InputSelect = ({ name, options, error, ...rest }) => {

    return (
        <div>
            {error && (
                <span className="d-block fs-14 fw-400 color-red px-2 pb-1">
                    {error}
                </span>
            )}
            <Select
                name={name}
                options={options}
                {...rest}
                styles={{
                    control: (styles) => ({
                        ...styles,
                        height: 45,
                        borderRadius: 10,
                        borderColor: error ? '#fd7676' : '#bbbbbb',
                        marginTop: '0.25rem',
                        marginBottom: '0.50rem',
                        marginLeft: '0.25rem',
                        marginRight: '0.25rem',
                        backgroundColor: error ? 'rgb(253, 118, 118, 0.05)' : 'transparent',
                        cursor: 'pointer'
                    }),
                    singleValue: (styles) => ({ ...styles, fontSize: window.innerWidth < 576 ? 16 : 18, color: "#707070" }),
                    placeholder: (styles) => ({ ...styles, fontSize: window.innerWidth < 576 ? 16 : 18, color: "#707070" }),
                }}
            />
        </div>
    );
};

export default InputSelect;
