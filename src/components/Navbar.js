import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <nav className="container p-3 mx-auto">
                <div className="bg-gray-200 dark:bg-gray-900 shadow rounded-full">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="self-center text-2xl whitespace-nowrap text-gray-900 dark:text-white title">Ryaze.my.id</span>
                        </NavLink>
                        <button onClick={toggleDarkMode} className="px-3 py-2 bg-gray-900 rounded-full dark:bg-white text-white dark:text-gray-900">
                            {isDarkMode ? (
                                <i class="bi bi-sun"></i>
                            ) : (
                                <i class="bi bi-moon-stars"></i>
                            )}
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
