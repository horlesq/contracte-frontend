import React from "react";

export default function ContractFilters({ filters, onFilterChange, onClearFilters }) {
    const handleFilterChange = (key, value) => {
        onFilterChange({ [key]: value });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">Filtre</h3>
                <button
                    onClick={onClearFilters}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200"
                >
                    Resetează
                </button>
            </div>

            {/* Category Filter - for future implementation */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Categorie
                </label>
                <select
                    value={filters.category || ""}
                    onChange={(e) => handleFilterChange("category", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                    <option value="">Toate categoriile</option>
                    <option value="munca">Contracte de muncă</option>
                    <option value="comercial">Contracte comerciale</option>
                    <option value="inchiriere">Contracte de închiriere</option>
                    <option value="servicii">Contracte de servicii</option>
                    <option value="parteneriat">Contracte de parteneriat</option>
                </select>
            </div>

            {/* Price Range Filter */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Interval de preț (RON)
                </label>
                <div className="space-y-2">
                    <input
                        type="number"
                        placeholder="Preț minim"
                        value={filters.minPrice || ""}
                        onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        min="0"
                        step="1"
                    />
                    <input
                        type="number"
                        placeholder="Preț maxim"
                        value={filters.maxPrice || ""}
                        onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        min="0"
                        step="1"
                    />
                </div>
            </div>

            {/* Sort Filter */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sortează după
                </label>
                <select
                    value={filters.sortBy || "title"}
                    onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                >
                    <option value="title">Nume (A-Z)</option>
                    <option value="price_asc">Preț crescător</option>
                    <option value="price_desc">Preț descrescător</option>
                    <option value="newest">Cele mai noi</option>
                </select>
            </div>

            {/* Editable Filter */}
            <div>
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={filters.editableOnly || false}
                        onChange={(e) => handleFilterChange("editableOnly", e.target.checked)}
                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Doar contracte editabile</span>
                </label>
            </div>
        </div>
    );
}