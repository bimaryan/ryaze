"use client"

import { motion, useScroll } from "motion/react"
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const { scrollYProgress } = useScroll()
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("darkMode");
        return savedMode === "true";
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 10,
                    originX: 0,
                    zIndex: 20,
                }}
                className="bg-gray-800 dark:bg-white"
            />

            <nav className="sticky top-0 z-10 bg-gray-100 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 backdrop-blur-lg shadow-md">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <NavLink to="/" className="flex items-center space-x-2">
                        <i className="fa-solid fa-code bg-gray-900 text-white rounded p-1 dark:bg-white dark:text-gray-900"></i>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">ryaze</span>
                    </NavLink>

                    {/* Toggle Dark Mode */}
                    <button
                        onClick={toggleDarkMode}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? (
                            <i className="bi bi-sun text-xl"></i>
                        ) : (
                            <i className="bi bi-moon-stars text-xl"></i>
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
}

export default Navbar;