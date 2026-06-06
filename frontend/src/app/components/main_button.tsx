import React from "react";

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function MainButton({ children, ...props }: MainButtonProps){
    return (
        <button {...props} className="my-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600">
            {children}
        </button>
    );
}