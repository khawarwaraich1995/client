import React from "react";

const Input = ({ id, value, label, name, placeholder, type, onChange }) => (
    <div className="form-group">
        {label && <label>{label}</label>}
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className={"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"}
            placeholder={placeholder}
        />
    </div>
);

export default Input;