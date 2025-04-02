"use client";

import { motion, useScroll } from "framer-motion";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { scrollYProgress } = useScroll();
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
      {/* Scroll Indicator */}
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          originX: 0,
          zIndex: 50,
        }}
        className="bg-gray-800 dark:bg-white"
      />

      {/* Navbar */}
      <nav className="max-w-2xl mx-auto fixed top-0 left-0 right-0 z-50 p-4">
        <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg shadow-lg rounded-xl px-6 py-3 transition-all">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center space-x-2">
              <i className="fa-solid fa-code bg-gray-900 text-white rounded p-1 dark:bg-white dark:text-gray-900"></i>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                ryaze
              </span>
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
