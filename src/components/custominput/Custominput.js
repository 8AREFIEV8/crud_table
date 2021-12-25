import './Custominput.css'
import React from "react";


const CustomInput = ({
    placeholder,
    handleChange,
    value,
    fieldName


}) => {
    return (
        <input
            placeholder={placeholder}
            onChange={(e) => handleChange(e, fieldName)}
               value={value}
        />
    )
}
export default CustomInput;