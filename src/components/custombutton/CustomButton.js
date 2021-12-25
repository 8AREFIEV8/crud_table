import React from "react";
import './CustomButton.css';

const CustomButton = ({
    lable,
    type,
    disabled = false,
    handleClick,
    classNames,
    data
                      }) => {
    return (
        <button
            className={classNames}
            onClick={() => handleClick(data)}
            type={type}
            disabled={disabled}
        >
            {lable}
        </button>
    )
}

export default CustomButton