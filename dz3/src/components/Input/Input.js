import React from "react";

const input = (name, onChange, value) => {
    return (
        <input
            type="text"
            name={name}
            onChange={onChange}
            value={value}
        />
    )
}

export default input;