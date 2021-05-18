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
    }),
    singleValue: (styles) => ({ ...styles, fontSize: 18, color: "#707070" }),
    placeholder: (styles) => ({ ...styles, fontSize: 18, color: "#707070" }),
};
const InputSelect = ({ name, options, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value",
            getValue: (ref) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map((option) => option.value);
                }
                if (!ref.state.value) {
                    return "";
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField]);
    return (
        <div>
            {error && (
                <span className="d-block fs-14 fw-400 color-red px-2 pb-1">
                    {error}
                </span>
            )}
            <Select
                className="select"
                options={options}
                ref={inputRef}
                {...rest}
                styles={styles}
            />
        </div>
    );
};

export default InputSelect;
