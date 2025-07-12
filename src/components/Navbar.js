"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogout = async () => {
        await logout();
        router.push("/");
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-blue-600 py-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl flex justify-between items-center">
                <div className="flex items-center space-x-10">
                    <Link
                        href="/"
                        className="text-white text-2xl font-bold flex items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        ContracteRO
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink href="/contracte">Contracte</NavLink>

                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 ease-in-out px-3 py-1 rounded-md flex items-center"
                            >
                                Categorii
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`ml-1 h-4 w-4 transition-transform ${
                                        isDropdownOpen
                                            ? "transform rotate-180"
                                            : ""
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    <Link
                                        href="/categorii/contracte-de-munca"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                    >
                                        Contracte de Muncă
                                    </Link>
                                    <Link
                                        href="/categorii/contracte-de-inchiriere"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                    >
                                        Contracte de Închiriere
                                    </Link>
                                    <Link
                                        href="/categorii/contracte-comerciale"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                    >
                                        Contracte Comerciale
                                    </Link>
                                    <Link
                                        href="/categorii/toate-categoriile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                    >
                                        Toate Categoriile
                                    </Link>
                                </div>
                            )}
                        </div>

                        <NavLink href="/despre">Despre</NavLink>
                        <NavLink href="/faq">FAQ</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                </div>

                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <Link
                                href="/dashboard"
                                className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-4 py-2 rounded-md flex items-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                Contul Meu
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-3 py-1 rounded-md border border-white hover:border-blue-200"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            href="/auth/login"
                            className="text-white hover:text-blue-200 transition duration-300 ease-in-out px-4 py-2 rounded-md"
                        >
                            Autentificare
                        </Link>
                    )}

                    <Link
                        href="/contracte"
                        className="bg-white text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out px-6 py-2 rounded-md font-semibold shadow-sm"
                    >
                        Cumpără Acum
                    </Link>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, children }) => (
    <Link
        href={href}
        className="text-white text-lg font-medium hover:text-blue-200 transition duration-300 ease-in-out px-3 py-1 rounded-md"
    >
        {children}
    </Link>
);
