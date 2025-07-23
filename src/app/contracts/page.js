"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ContractCard from "@/components/ContractCard";
// import ContractFilters from "@/components/ContractFilters"; // For future use
import SearchBar from "@/components/SearchBar";
import LoadingSpinner from "@/components/LoadingSpinner";
import ContractFilters from "@/components/ContractFilters";

export default function ContractsPage() {
    const router = useRouter();
    const [contracts, setContracts] = useState([]);
    const [filteredContracts, setFilteredContracts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    // Filters placeholder for future implementation
    const [filters, setFilters] = useState({
        // category: "",
        // minPrice: "",
        // maxPrice: "",
        // sortBy: "title"
    });

    // Fetch contracts from API
    useEffect(() => {
        const fetchContracts = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:8000/api/contracts");
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setContracts(data.data || data); // Handle different API response structures
                setFilteredContracts(data.data || data);
            } catch (err) {
                console.error("Error fetching contracts:", err);
                setError("Nu am putut încărca contractele. Vă rugăm să încercați din nou.");
            } finally {
                setLoading(false);
            }
        };

        fetchContracts();
    }, []);

    // Filter and search contracts
    useEffect(() => {
        let filtered = [...contracts];

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(contract =>
                contract.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                contract.description?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Future filters will be added here
        // Apply category filter
        // if (filters.category) {
        //     filtered = filtered.filter(contract => 
        //         contract.category === filters.category
        //     );
        // }

        // Apply price range filter
        // if (filters.minPrice) {
        //     filtered = filtered.filter(contract => 
        //         parseFloat(contract.price) >= parseFloat(filters.minPrice)
        //     );
        // }

        // Apply sorting - basic alphabetical for now
        filtered.sort((a, b) => a.title.localeCompare(b.title));

        setFilteredContracts(filtered);
    }, [contracts, searchTerm]);

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const handleFilterChange = (newFilters) => {
        // Placeholder for future filter implementation
        setFilters(prev => ({ ...prev, ...newFilters }));
    };

    const clearFilters = () => {
        // Reset filters when implemented
        setFilters({});
        setSearchTerm("");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <LoadingSpinner />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50">
                <div className="container mx-auto px-4 py-8">
                    <div className="text-center">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                            <h2 className="text-lg font-semibold text-red-800 mb-2">
                                Eroare la încărcarea contractelor
                            </h2>
                            <p className="text-red-600 mb-4">{error}</p>
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Încearcă din nou
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Modele de Contracte
                    </h1>
                    <p className="text-gray-600">
                        Găsește contractul juridic potrivit pentru nevoile tale
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar - ready for filters */}
                    <div className="lg:w-1/4">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-8">
                            <SearchBar onSearch={handleSearch} value={searchTerm} />
                            {/* <ContractFilters  */}
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="lg:w-3/4">
                        {/* Results header */}
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                {filteredContracts.length} contracte găsite
                                {searchTerm && (
                                    <span className="ml-2 text-blue-600">
                                        pentru "{searchTerm}"
                                    </span>
                                )}
                            </p>
                        </div>

                        {/* Contracts grid */}
                        {filteredContracts.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-gray-400 mb-4">
                                    <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    Nu au fost găsite contracte
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Încearcă să modifici criteriile de căutare sau filtrele.
                                </p>
                                <button
                                    onClick={() => setSearchTerm("")}
                                    className="text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Șterge căutarea
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {filteredContracts.map((contract) => (
                                    <ContractCard
                                        key={contract.id}
                                        contract={contract}
                                        onClick={() => router.push(`/contracts/${contract.id}`)}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}