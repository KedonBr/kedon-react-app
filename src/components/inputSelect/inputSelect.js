import React, { useEffect, useRef, useState } from "react";
import { useField } from "@unform/core";
import Select from "react-select";
import "./inputSelect.scss";
const styles = {
    control: (styles) => ({
        ...styles,
        height: 45,
        borderRadius: 10,
        borderColor: "#bbbbbb",
        marginBottom: 10,
        backgroundColor: "#f3f3f3"
    }),
    singleValue: (styles) => ({ ...styles, fontSize: 18, color: "#707070" }),
    placeholder: (styles) => ({ ...styles, fontSize: 18, color: "#707070" }),
};
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
                className="select"
                options={options}
                {...rest}
                styles={styles}
            />
        </div>
    );
};

export default InputSelect;
