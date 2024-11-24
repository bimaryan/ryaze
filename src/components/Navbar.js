import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Ambil nilai dari localStorage atau default ke false
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "true";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        // Simpan status ke localStorage
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="z-10 sticky top-0 w-full max-w-screen mx-auto p-4 bg-gray-100 dark:bg-gray-900 shadow-xl">
            <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto">
                <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center font-bold text-1xl whitespace-nowrap text-gray-900 dark:text-white title">
                        <i class="fa-solid fa-code bg-gray-900 dark:bg-white rounded p-1 text-white dark:text-gray-900"></i> ryaze
                    </span>
                </NavLink>
                <button
                    onClick={toggleDarkMode}
                    className="px-2 py-1 bg-gray-900 rounded-full dark:bg-white text-white dark:text-gray-900"
                >
                    {isDarkMode ? (
                        <i className="bi bi-sun"></i>
                    ) : (
                        <i className="bi bi-moon-stars"></i>
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
