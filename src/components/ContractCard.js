import React from "react";
import Image from "next/image";

export default function ContractCard({ contract, onClick }) {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('ro-RO', {
            style: 'currency',
            currency: 'RON'
        }).format(parseFloat(price));
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('ro-RO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const truncateDescription = (text, maxLength = 120) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    return (
        <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer group"
            onClick={onClick}
        >
            {/* Preview Image */}
            <div className="relative h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                {contract.preview_path ? (
                    <Image
                        src={`http://localhost:8000/storage/${contract.preview_path}`}
                        alt={`Preview ${contract.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100">
                        <svg 
                            className="w-16 h-16 text-gray-400" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={1} 
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                            />
                        </svg>
                    </div>
                )}
                
                {/* Price badge */}
                <div className="absolute top-3 right-3">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                        {formatPrice(contract.price)}
                    </span>
                </div>

                {/* Editable badge */}
                {contract.is_editable === 1 && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium shadow-lg">
                            Editabil
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 capitalize">
                    {contract.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {truncateDescription(contract.description)}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-xs text-gray-500">
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 1v1a2 2 0 001 1h4a2 2 0 001-1V8" />
                        </svg>
                        Adăugat {formatDate(contract.created_at)}
                    </div>
                    
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200">
                        Vezi detalii →
                    </button>
                </div>
            </div>
        </div>
    );
}