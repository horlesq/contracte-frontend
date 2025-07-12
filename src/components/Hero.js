import Image from "next/image";
import React from "react";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 md:py-28 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl flex flex-col md:flex-row items-center justify-between relative z-10">
                {/* Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 pr-0 md:pr-12">
                    <h1 className="text-5xl text-gray-800 md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-sm">
                        Modele de{" "}
                        <span className=" text-blue-600">contracte</span> pentru
                        orice situație
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
                        Indiferent de tranzacție – vânzare, cumpărare,
                        închiriere sau orice alt acord – găsești aici modelul de
                        contract perfect, personalizabil și gata de utilizat.
                    </p>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-50">
                            Explorează Contracte
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative w-full max-w-lg">
                        <Image
                            src="/hero-image.png"
                            alt="Imagine reprezentativă pentru contracte juridice simplificate"
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
            </div>
        </section>
    );
}
