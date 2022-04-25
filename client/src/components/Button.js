import React from "react";

const SubmitButton = ({ label, icon, type, onClick, size, bgColor, textColor }) => (

    <div>
        <button
            type={type}
            onClick={onClick}
            className={`bg-${bgColor} text-${textColor} roup relative w-${size} flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md hover:bg-${bgColor} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${bgColor}-500`}
        >
            {icon &&
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    {icon}
                </span>
            }
            {label}
        </button>
    </div>
);

export default SubmitButton;