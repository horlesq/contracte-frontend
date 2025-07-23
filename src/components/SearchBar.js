import React, { useState } from "react";

export default function SearchBar({ onSearch, value }) {
    const [localValue, setLocalValue] = useState(value || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(localValue);
    };

    const handleClear = () => {
        setLocalValue("");
        onSearch("");
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        setLocalValue(newValue);
        // Real-time search - call onSearch as user types
        onSearch(newValue);
    };

    return (
        <div className="w-full">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Caută contracte
            </label>
            <form onSubmit={handleSubmit} className="relative">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg 
                            className="h-5 w-5 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                            />
                        </svg>
                    </div>
                    <input
                        id="search"
                        type="text"
                        value={localValue}
                        onChange={handleChange}
                        placeholder="Caută după titlu sau descriere..."
                        className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500 text-sm transition-colors duration-200"
                    />
                    {localValue && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                        >
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
            </form>
            {localValue && (
                <p className="mt-2 text-xs text-gray-500">
                    Căutare activă pentru: "<span className="font-medium text-gray-700">{localValue}</span>"
                </p>
            )}
        </div>
    );
}