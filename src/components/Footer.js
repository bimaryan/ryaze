import React from "react";

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-800 text-center max-w-2xl mx-auto fixed bottom-0 left-0 right-0 p-4 rounded-xl">
            <p className="text-sm text-gray-600 dark:text-gray-300">
                © 2024 - {new Date().getFullYear()} Ryaze. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
