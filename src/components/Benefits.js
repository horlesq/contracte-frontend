import React from "react";
import Image from "next/image"; // Import the Image component

export default function BenefitsSection() {
    const benefits = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>
            ),
            title: "Descărcare Instantanee",
            description:
                "Accesezi contractele imediat în format PDF & DOCX pentru editare completă",
        },
        // Removed "Redactate de Juriști" benefit
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                </svg>
            ),
            title: "Istoric Achiziții",
            description:
                "Păstrezi accesul permanent la toate contractele cumpărate în contul tău",
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                </svg>
            ),
            title: "Preţuri Accesibile",
            description:
                "Economisești sute de lei față de consultanța juridică tradițională",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        De ce să cumperi de aici?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Oferim modele de contracte clare, ușor de folosit și
                        potrivite pentru orice tip de tranzacție sau colaborare.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Image Content - Left Side */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="relative w-full max-w-lg">
                            <Image
                                src="/benefits-image.png"
                                alt="Imagine reprezentativă pentru beneficii"
                                width={600}
                                height={400}
                                className="w-full h-auto"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src =
                                        "https://placehold.co/600x400/E0F2F7/000000?text=Imagine+Indisponibilă";
                                }}
                            />
                        </div>
                    </div>

                    {/* Benefits Content - Right Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left pl-0 lg:pl-12">
                        <div className="space-y-8">
                            {benefits.map((benefit, index) => (
                                <div
                                    key={index}
                                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full">
                                            {benefit.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <div className="text-center mt-16">
                    <div className="bg-blue-600 text-white py-6 px-8 rounded-2xl shadow-xl inline-block transform hover:scale-105 transition-transform duration-300">
                        <p className="text-2xl font-bold mb-2">
                            Peste 1000+ de contracte disponibile
                        </p>
                        <p className="text-blue-100 text-lg">
                            Toate adaptate legislației românești
                        </p>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
