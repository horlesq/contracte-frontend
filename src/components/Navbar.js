"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const { user, logout } = useAuth();
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const handleLogout = async () => {
        await logout();
        router.push("/");
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Close dropdown and mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
            if (
                mobileMenuRef.current &&
                !mobileMenuRef.current.contains(event.target)
            ) {
                setIsMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-blue-600 py-4 shadow-lg absolute top-0 left-0 right-0 z-50">
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

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center space-x-6">
                        <NavLink href="/contracts">Contracte</NavLink>

                        <div className="relative" ref={dropdownRef}>
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
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Contracte de Muncă
                                    </Link>
                                    <Link
                                        href="/categorii/contracte-de-inchiriere"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Contracte de Închiriere
                                    </Link>
                                    <Link
                                        href="/categorii/contracte-comerciale"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Contracte Comerciale
                                    </Link>
                                    <Link
                                        href="/categorii/toate-categoriile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-blue-50"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Toate Categoriile
                                    </Link>
                                </div>
                            )}
                        </div>

                        <NavLink href="/faq">FAQ</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                </div>

                {/* Mobile Menu Button (Hamburger Icon) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Desktop Auth and Buy Now Buttons */}
                <div className="hidden md:flex items-center space-x-4">
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
                        href="/contracts"
                        className="bg-white text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out px-6 py-2 rounded-md font-semibold shadow-sm"
                    >
                        Cumpără Acum
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="md:hidden absolute top-0 left-0 w-full h-screen bg-blue-600 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 animate-fade-in"
                    ref={mobileMenuRef}
                >
                    <NavLinkMobile
                        href="/contracts"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contracte
                    </NavLinkMobile>
                    {/* Categories Dropdown for Mobile */}
                    <div className="relative w-full text-center">
                        <button
                            onClick={toggleDropdown}
                            className="text-white text-2xl font-medium hover:text-blue-200 transition duration-300 ease-in-out px-3 py-1 rounded-md flex items-center justify-center w-full"
                        >
                            Categorii
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`ml-2 h-6 w-6 transition-transform ${
                                    isDropdownOpen ? "transform rotate-180" : ""
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
                            <div className="mt-4 w-full bg-blue-700 rounded-md shadow-lg py-2">
                                <Link
                                    href="/categorii/contracte-de-munca"
                                    className="block px-4 py-3 text-white hover:bg-blue-800 text-xl"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Contracte de Muncă
                                </Link>
                                <Link
                                    href="/categorii/contracte-de-inchiriere"
                                    className="block px-4 py-3 text-white hover:bg-blue-800 text-xl"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Contracte de Închiriere
                                </Link>
                                <Link
                                    href="/categorii/contracte-comerciale"
                                    className="block px-4 py-3 text-white hover:bg-blue-800 text-xl"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Contracte Comerciale
                                </Link>
                                <Link
                                    href="/categorii/toate-categoriile"
                                    className="block px-4 py-3 text-white hover:bg-blue-800 text-xl"
                                    onClick={() => {
                                        setIsDropdownOpen(false);
                                        setIsMobileMenuOpen(false);
                                    }}
                                >
                                    Toate Categoriile
                                </Link>
                            </div>
                        )}
                    </div>
                    <NavLinkMobile
                        href="/faq"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        FAQ
                    </NavLinkMobile>
                    <NavLinkMobile
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Contact
                    </NavLinkMobile>

                    {user ? (
                        <>
                            <NavLinkMobile
                                href="/dashboard"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contul Meu
                            </NavLinkMobile>
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-white text-2xl font-medium px-6 py-3 rounded-md border border-white hover:border-blue-200 transition duration-300 ease-in-out"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <NavLinkMobile
                            href="/auth/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Autentificare
                        </NavLinkMobile>
                    )}
                    <Link
                        href="/contracts"
                        className="bg-white text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out px-8 py-3 rounded-full font-semibold shadow-sm text-xl mt-4"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Cumpără Acum
                    </Link>
                </div>
            )}
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

const NavLinkMobile = ({ href, children, onClick }) => (
    <Link
        href={href}
        className="text-white text-2xl font-medium hover:text-blue-200 transition duration-300 ease-in-out px-3 py-1 rounded-md"
        onClick={onClick}
    >
        {children}
    </Link>
);