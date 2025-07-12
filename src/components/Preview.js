import React from "react";
import Image from "next/image";

export default function PreviewSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white"> {/* Changed background here */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8  max-w-screen-xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        Vezi înainte să cumperi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fiecare contract poate fi previzualizat gratuit pentru a
                        înțelege structura și conținutul înainte de achiziție.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Preview Features - This will now be on the Left Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left pr-0 lg:pr-12"> {/* Adjusted padding */}
                        <div className="space-y-8">
                            <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-blue-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        Previzualizare Gratuită
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Vezi prima pagină a contractului pentru
                                        a înțelege structura și conținutul
                                        înainte de cumpărare
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        Conținut Complet
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        După achiziție primești contractul
                                        complet în format PDF și DOCX, gata de
                                        personalizat
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-purple-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                                        Editabil și Personalizabil
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Modifici cu ușurință numele, datele și
                                        clauzele pentru a se potrivi perfect
                                        situației tale
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 text-center lg:text-left">
                            <button className="bg-blue-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
                                Vezi Toate Contractele
                            </button>
                        </div>
                    </div>

                    {/* Contract Preview - This will now be on the Right Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end"> {/* Adjusted justify here */}
                        <div className="relative w-full max-w-lg">
                            <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 transform hover:scale-105 transition-transform duration-300">
                                <Image
                                    src="/contract_inchiriere_bicicleta_electrica_preview.png"
                                    alt="Preview contract închiriere bicicletă electrică"
                                    width={500}
                                    height={650}
                                    className="w-full h-auto rounded-lg shadow-md"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src =
                                            "https://placehold.co/500x650/F3F4F6/6B7280?text=Preview+Contract+Închiriere+Bicicletă+Electrică";
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Preview Cards */}
                <div className="mt-20">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-800 mb-4">
                            Exemple de contracte populare
                        </h3>
                        <p className="text-lg text-gray-600">
                            Toate cu previzualizare gratuită
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Contract Vânzare-Cumpărare Auto",
                                price: "10 RON",
                                category: "Vehicule",
                            },
                            {
                                title: "Contract Închiriere Apartament",
                                price: "10 RON",
                                category: "Imobiliare",
                            },
                            {
                                title: "Contract Prestări Servicii",
                                price: "10 RON",
                                category: "Business",
                            },
                        ].map((contract, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
                            >
                                
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                            {contract.category}
                                        </span>
                                        <span className="text-2xl font-bold text-gray-800">
                                            {contract.price}
                                        </span>
                                    </div>
                                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                                        {contract.title}
                                    </h4>
                                    <div className="space-y-2 mb-6">
                                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                                            Previzualizare
                                        </button>
                                        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg transition duration-300">
                                            Cumpără Acum
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}