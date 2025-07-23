import React from "react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Contracte Juridice
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            Platformă online care oferă modele de contracte juridice
                            clare, ușor de folosit și potrivite pentru orice tip de
                            tranzacție sau colaborare.
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Contracte */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Contracte Populare
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/contracte/vanzare-auto" className="hover:text-blue-400 transition-colors duration-300">
                                    Vânzare-Cumpărare Auto
                                </Link>
                            </li>
                            <li>
                                <Link href="/contracte/inchiriere-apartament" className="hover:text-blue-400 transition-colors duration-300">
                                    Închiriere Apartament
                                </Link>
                            </li>
                            <li>
                                <Link href="/contracte/prestari-servicii" className="hover:text-blue-400 transition-colors duration-300">
                                    Prestări Servicii
                                </Link>
                            </li>
                            <li>
                                <Link href="/contracte/munca" className="hover:text-blue-400 transition-colors duration-300">
                                    Contract de Muncă
                                </Link>
                            </li>
                            <li>
                                <Link href="/contracte/comodat" className="hover:text-blue-400 transition-colors duration-300">
                                    Contract Comodat
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Informații */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Informații
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/despre" className="hover:text-blue-400 transition-colors duration-300">
                                    Despre Noi
                                </Link>
                            </li>
                            <li>
                                <Link href="/cum-functioneaza" className="hover:text-blue-400 transition-colors duration-300">
                                    Cum Funcționează
                                </Link>
                            </li>
                            <li>
                                <Link href="/intrebari-frecvente" className="hover:text-blue-400 transition-colors duration-300">
                                    Întrebări Frecvente
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-blue-400 transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/suport" className="hover:text-blue-400 transition-colors duration-300">
                                    Suport
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>
                                <Link href="/termeni-si-conditii" className="hover:text-blue-400 transition-colors duration-300">
                                    Termeni și Condiții
                                </Link>
                            </li>
                            <li>
                                <Link href="/politica-confidentialitate" className="hover:text-blue-400 transition-colors duration-300">
                                    Politica de Confidențialitate
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-blue-400 transition-colors duration-300">
                                    Politica Cookies
                                </Link>
                            </li>
                            <li>
                                <Link href="/gdpr" className="hover:text-blue-400 transition-colors duration-300">
                                    GDPR
                                </Link>
                            </li>
                            <li>
                                <Link href="/returnari" className="hover:text-blue-400 transition-colors duration-300">
                                    Returnări
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-700">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <p className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 Contracte Juridice. Toate drepturile rezervate.
                        </p>
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span>🇷🇴 România</span>
                            <span>•</span>
                            <span>RON</span>
                            <span>•</span>
                            <span>
                                <svg className="inline h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                </svg>
                                Cluj-Napoca
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}