import React from "react";

export default function LoadingSpinner({ size = "default", text = "Se încarcă..." }) {
    const sizeClasses = {
        small: "h-5 w-5",
        default: "h-8 w-8",
        large: "h-12 w-12"
    };

    const textSizeClasses = {
        small: "text-sm",
        default: "text-base",
        large: "text-lg"
    };

    return (
        <div className="flex flex-col items-center justify-center py-12">
            <div className="relative">
                <div className={`${sizeClasses[size]} animate-spin`}>
                    <svg 
                        className="w-full h-full text-blue-600" 
                        fill="none" 
                        viewBox="0 0 24 24"
                    >
                        <circle 
                            className="opacity-25" 
                            cx="12" 
                            cy="12" 
                            r="10" 
                            stroke="currentColor" 
                            strokeWidth="4"
                        />
                        <path 
                            className="opacity-75" 
                            fill="currentColor" 
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                </div>
            </div>
            {text && (
                <p className={`${textSizeClasses[size]} text-gray-600 mt-4 font-medium`}>
                    {text}
                </p>
            )}
        </div>
    );
}