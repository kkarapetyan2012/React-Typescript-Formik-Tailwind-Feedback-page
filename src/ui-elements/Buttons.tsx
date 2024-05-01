
import React, { FC } from "react";
import { createCSSClass } from "../utils/jsxHelpers";

type ButtonProps = {
    children: React.ReactNode,
    variant?: string,
    className?: string,
    type: 'submit' | 'button',
}

const Button: FC<ButtonProps> = ({ children, variant, className, ...props }) => {
    const baseStyle = "px-3 py-2 text-white rounded-md ";

    const variantClasses: {
        [key: string]: string;
        primary: string;
        outline: string;
    } = {
        primary: 'bg-[#228B22] hover:bg-[#186218] focus:outline-none focus:ring-2 focus:ring-opacity-50',
        outline: 'bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500',
    }

    return (
        <button
            className={createCSSClass([baseStyle, variant ? variantClasses[variant] : '', className])} {...props}
        >
            {/* in there also we can add icons */}
            {children}
        </button>
    );
};

export default Button;